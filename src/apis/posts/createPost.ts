import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
export const createPost = async (req: NextApiRequest, res: NextApiResponse) => {
    const post = await prisma.post.create({
        data: {
            title: req.body.title,
            content: req.body.content,
            authorIdx: req.body.authorIdx,
        },
    })

    res.status(200).json({
        status: "success",
        idx: post.idx,
    })
}
