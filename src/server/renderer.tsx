import * as fs from "fs";
import * as React from "react";
import { renderToString } from "react-dom/server";
import App from "../components/app";
import log from "../lambda/logger";
import AppState from "./appState";

export default class Renderer {

    private baseTemplate: string;
    private entryPoint: string;

    constructor() {
        fs.readFile("D:\\amaranthus\\views\\index.html", "utf8", (error, data) => {
            this.baseTemplate = data;
            log("Initial page render", "ssr");
        });
    }

    public getPage(appState?: AppState) {
        const reactDom = renderToString(<App appState={appState}/>);
        return this.baseTemplate.replace("$app", reactDom);
    }
}
