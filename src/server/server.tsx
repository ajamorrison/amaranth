import * as express from "express";
import * as fs from "fs";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/app";
import RequestHandler from "./requestHandler";

/**
 * The server component that handles routing and requests from a macro level.
 */
export default class Server {

    private port: number;
    private app: express.Application;
    private data: string;

    constructor(port: number) {

        process.stdout.write("Server initialised at " + port.toString() + "\n");

        process.stdout.write("Prerendering entry page");

        const reactDom = renderToString(<App />);

        fs.readFile(process.cwd() + "/views/index.html", "utf8", (err, data) => {
            this.data = data;
            this.data = this.data.replace("$app", reactDom);
        });

        this.port = port;
        this.app = express();

        this.app.listen(this.port);
        this.app.use(express.static("."));

        this.app.get("*", (req, res) => {

            const handler = new RequestHandler(req);

            res.send(this.data);
        });

        this.app.post("/send", (req, res) => {
            process.stdout.write("Submitted form data");
            res.sendStatus(200);
        });

    }
}
