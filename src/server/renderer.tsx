import * as fs from "fs";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/app";
import log from "../lambda/logger";

export default class Renderer {

    private baseTemplate: string;
    private entryPoint: string;

    constructor() {
        fs.readFile(process.cwd() + "/views/index.html", "utf8", (error, data) => {
            this.baseTemplate = data;
            log("Initial page render", "SSR");
        });
    }

    public getPage() {
        const reactDom = renderToString(<App />);
        return this.baseTemplate.replace("$app", reactDom);
    }
}
