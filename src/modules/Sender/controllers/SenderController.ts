import { Request, Response } from "express";
import { puzzles } from "../../../../puzzles";
import { sender } from "../Sender";


export class SenderController {
    async sendMessage(req: Request, res: Response) {
        let index = 0;
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
    }
}