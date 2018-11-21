import * as express from "express";
import DBClient from "../database/dbClient";
import log from "../lambda/logger";
import Renderer from "./renderer";

/**
 * The server component that handles routing and requests from a macro level.
 */
export default class Server {

    private port: number;
    private app: express.Application;
    private data: string;
    private renderer: Renderer;
    private dbClient: DBClient;

    constructor(port: number) {

        this.renderer = new Renderer();
        this.dbClient = new DBClient("./data");

        this.port = port;
        this.app = express();

        this.app.listen(this.port);
        this.app.use(express.static("."));

        log("Initialised server", "server");

        this.app.get("*", (req, res) => {
            res.send(this.renderer.getPage());
        });

        this.app.post("/send", (req, res) => {
            process.stdout.write("Submitted form data");
            res.sendStatus(200);
        });

    }
}
