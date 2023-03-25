import { Router, Request, Response } from "express";
import { sender } from "../headless/sender";
import { puzzles } from "../../../puzzles";

let index = 0;
const router = Router();

export const ok = router.get('/send', async (req: Request, res: Response) => {
    try {
        console.log('index', index)
        const selectedMessage = puzzles[index].message
        await sender.sendText(process.env.phone, selectedMessage)
        index += 1
        res.status(200).json()
    } catch (err) {
        console.log('error', err)
        res.status(500).json({ status: "error", message: err })
    }
})

export { router }