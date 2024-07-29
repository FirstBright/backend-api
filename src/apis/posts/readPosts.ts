import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
export const readPosts = async (req: NextApiRequest, res: NextApiResponse) => {
    const posts = await prisma.post.findMany()

    res.status(200).json({
        posts,
    })
}
