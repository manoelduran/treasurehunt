import express, { Express as Application } from 'express';
import { createServer, Server as HttpServer } from "http";
import 'express-async-errors';
import 'reflect-metadata';
import 'dotenv/config';
import { router } from './routes';
import { sender } from '../modules/Sender/Sender';



class Main {
    public app: Application;
    public server: HttpServer
    constructor() {
        this.app = express();

        this.server = createServer(this.app);
    }
    public async init(): Promise<void> {
        this.middlewares()
        this.routes()
        sender
    }
    private middlewares() {
        this.app.set("trust proxy", 1);
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.static("public"));

    }

    private routes(): void {
        this.app.use(router);
    }
    public listen(): void {
        this.server.listen(process.env.PORT || 3333, () => {
            console.log(
                `--- Server started on port ${process.env.PORT || 3333} 🚀---`
            );
        });
    }

}
export const main = new Main()