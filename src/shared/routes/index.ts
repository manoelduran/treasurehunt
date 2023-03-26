import { Router } from "express";
import { SenderController } from "../../modules/Sender/controllers/SenderController";


const senderController = new SenderController();
const router = Router();

router.get('/send', senderController.sendMessage)

export { router }