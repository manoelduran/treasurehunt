import { Whatsapp, create, } from 'venom-bot';
import { puzzles } from '../../../puzzles';

class Sender {
  private client: Whatsapp

  constructor() {
    this.initialize()
  }
  public async sendText(to: string, body: string) {
    //55dddnumero@c.us
    await this.client.sendText(to, body)
  }
  public async getMessage(client: Whatsapp) {
    let index = 0;
    this.client = client;
    await this.client.onMessage(async (message: Message) => {
      if (message.chatId === process.env.chatId && message.body === 'Achei') {
        try {
          console.log('index', index)
          const selectedMessage = puzzles[index].message
          await this.sendText(process.env.chatId, selectedMessage)
          index += 1
        } catch (err) {
          console.log('error', err)
        }
      }
    });
  }
  private initialize() {
    const start = (client: Whatsapp) => {
      this.client = client;
      this.sendText(process.env.phone, "Ola, tudo bem? esse é um teste")
    }
    create({
      session: 'treasure-hunt',
      multidevice: true,
      headless: false
    }).then((client: Whatsapp) => {
      start(client)
      this.getMessage(client)
    }).catch((erro) => {
      console.log(erro);
    });
  }
}
export const sender = new Sender()