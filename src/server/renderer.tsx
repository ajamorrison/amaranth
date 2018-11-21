import * as fs from "fs";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/app";

export default class Renderer {

    private baseTemplate: string;
    private entryPoint: string;

    constructor() {
        fs.readFile(process.cwd() + "/views/index.html", "utf8", (err, data) => {
            this.baseTemplate = data;
            process.stdout.write("SSR | Base template rendered.\n");
        });
    }

    public getPage() {
        const reactDom = renderToString(<App />);
        return this.baseTemplate.replace("$app", reactDom);
    }
}
