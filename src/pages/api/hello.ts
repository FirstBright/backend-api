import { PrismaClient } from "@prisma/client"
import type { NextApiRequest, NextApiResponse } from "next"

type Data = {
    name: string
}

const prisma = new PrismaClient()

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log("🚀 ~ handler ~ req:", req)

    const users = await prisma.user.findMany()
    console.log("🚀 ~ handler ~ posts :", users)
    res.status(200).json({ name: "John Doe" })
}

export default handler
