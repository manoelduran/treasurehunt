import { Whatsapp, create } from 'venom-bot';

class Venom {
    private client: Whatsapp
    constructor() {
        this.initialize()
    }
    async sendText(to: string, body: string) {
        //55dddnumero@c.us

        await this.client.sendText(to, body)
    }

    private initialize() {
        const start = async (client: Whatsapp) => {
            client.onMessage((message) => {
                if (!message.isGroupMsg) {
                    this.client = client;
                    this.sendText("5571992126361@c.us", "Ola, tudo bem? esse é um teste")
                }
            });

        }

        create({
            session: 'treasure-hunt',
            multidevice: true,
            headless: false,
        })
            .then((client: Whatsapp) => {
                console.log('client', client)
                start(client)
            })
            .catch((erro) => {
                console.log(erro);
            });
    }
}
export const venom = new Venom()
// CRUD
export function start(client: Whatsapp) {

}