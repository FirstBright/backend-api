import { updateUser } from "@/apis/users/updateUser"
import { deleteUser } from "@/apis/users/deleteUser"
import { readUser } from "@/apis/users/readUser"
import { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    console.log("🚀 ~ handler ~ req:", req.query)
    if (req.method === "DELETE") {
        await deleteUser(req, res)
    }
    if (req.method === "GET") {
        await readUser(req, res)
    }
    if (req.method === "PUT") {
        await updateUser(req, res)
    }

    res.status(200).json({
        message: "ok",
    })
}

export default handler
