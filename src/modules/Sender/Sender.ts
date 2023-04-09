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
      console.log('message', message)
      if (message.chatId === process.env.chatId && message.body === 'Sim') {
          const selectedMessage = puzzles[0].message
          await this.sendText(process.env.chatId, selectedMessage)
          index += 1
      }
      if (message.chatId === process.env.chatId && message.body === 'Achei') {
          console.log('index', index)
          const selectedMessage = puzzles[index].message
          await this.sendText(process.env.chatId, selectedMessage)
          index += 1
      }
    });
  }
  private initialize() {
    const start = (client: Whatsapp) => {
      this.client = client;
      this.sendText(process.env.chatId, "Ola, Brenda, tudo bem? Temos um desafio para concluir e precisamos de sua ajuda, nos ajude a encontrar os 10 chocolates perdidos. Responda `Sim`, para iniciar!")
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