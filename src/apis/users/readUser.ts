import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
export const readUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idx } = req.query
    if (typeof idx !== "string") {
        return res.status(400).json({ error: "Invalid user id" })
    }
    const numIdx = parseInt(idx, 10)
    const user = await prisma.user.findUnique({
        where: {
            idx: numIdx,
        },
    })
    if (user) {
        res.status(200).json({
            user,
        })
    }
    res.status(400).json({
        status: `${numIdx} doesn't exist`,
    })
}
