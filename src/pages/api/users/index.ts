import { createUser } from "@/apis/users/creadUser"
import { readUsers } from "@/apis/users/readUsers"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "GET") {
        await readUsers(req, res)
    } else if (req.method === "POST") {
        await createUser(req, res)
    } else {
        res.status(400).json({
            message: "지원하지 않는 매서드 입니다.",
        })
    }
    console.log("🚀 ~ handler ~ req:", req)
}

export default handler
