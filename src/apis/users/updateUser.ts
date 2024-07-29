import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

interface IupdateData {
    name?: string
    nickname?: string
    email?: string
}

const prisma = new PrismaClient()

export const updateUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idx } = req.query

    // Ensure idx is a string
    if (typeof idx !== "string") {
        return res.status(400).json({ error: "Invalid user id" })
    }

    const numIdx = parseInt(idx)

    // Validate numIdx is a number
    if (isNaN(numIdx)) {
        res.status(400).json({ error: "Invalid user id" })
    }

    // Build the update object dynamically
    const updateData: IupdateData = {}

    if (req.body.name !== undefined) {
        updateData.name = req.body.name
    }
    if (req.body.nickname !== undefined) {
        updateData.nickname = req.body.nickname
    }
    if (req.body.email !== undefined) {
        updateData.email = req.body.email
    }

    // Check if updateData is empty
    if (Object.keys(updateData).length === 0) {
        res.status(400).json({ error: "No data provided to update" })
    }

    // try {
    const user = await prisma.user.updateMany({
        where: {
            idx: numIdx,
        },
        data: updateData,
    })

    // Check if any user was updated
    if (user.count > 0) {
        res.status(200).json({
            status: "update success",
        })
    }

    res.status(404).json({ error: "User not found" })
}
