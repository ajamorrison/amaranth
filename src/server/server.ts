import * as bodyParser from "body-parser";
import * as cookieParser from "cookie-parser";
import * as express from "express";
import * as fs from "fs";
import * as https from "https";
import DBClient from "../database/dbClient";
import log from "../lambda/logger";
import Renderer from "./renderer";

/**
 * The server component that handles routing and requests from a macro level.
 */
export default class Server {

    public port: number;
    private app: express.Application;
    private renderer: Renderer;
    private dbClient: DBClient;

    constructor(port: number) {

        this.renderer = new Renderer();
        this.dbClient = new DBClient("D:\\amaranthus\\data");

        this.port = port;
        this.app = express();

        this.app.use(express.static(process.cwd()));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser("SECRET KEY"));

        this.app.listen(this.port);

        log("Initialised server on port " + this.port.toString(), "server");

        this.app.get("*", (req, res) => {

            log("PATH " + req.path + "| QUERY " +
                req.query.q + "| COOKIE " +
                req.cookies.user, "REQ");

            if (!req.cookies.userid) {
                log("New session detected", "session");
                res.cookie("userid", "someID", { maxAge: 9000 });
            }

            res.send(this.renderer.getPage());
        });
    }
}
