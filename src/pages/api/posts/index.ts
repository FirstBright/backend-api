import { createPost } from "@/apis/posts/createPost"
import { readPosts } from "@/apis/posts/readPosts"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        await readPosts(req, res)
    } else if (req.method === "POST") {
        await createPost(req, res)
    } else {
        res.status(400).json({
            message: "지원하지 않는 매서드 입니다.",
        })
    }
    console.log("🚀 ~ handler ~ req:", req)
}

export default handler
