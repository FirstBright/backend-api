import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()

export const deleteUser = async (req: NextApiRequest, res: NextApiResponse) => {
    const { idx } = req.query

    if (typeof idx !== "string") {
        return res.status(400).json({ error: "Invalid user id" })
    }
    const numIdx = parseInt(idx, 10)
    const findUserPosts = await prisma.user.findUnique({
        where: {
            idx: numIdx,
        },
    })
    if (findUserPosts) {
        await prisma.post.deleteMany({
            where: {
                authorIdx: numIdx,
            },
        })
        const user = await prisma.user.delete({
            where: {
                idx: numIdx,
            },
        })
        res.status(200).json({
            status: `idx ${user.idx} is deleted`,
        })
    }
    res.status(200).json({
        status: `idx ${numIdx} doesn't exist`,
    })
}
