import { Button } from "antd";
import fs = require("fs");
import * as React from "react";

interface IJSONProtocol {
    "Project Title": string;
}

export default class App extends React.Component<{}, { json: IJSONProtocol }> {

    constructor(props: any) {
        super(props);

        this.state = {
            json: this.parseInputFilename("./data/testImageCaption.json"),
        };
    }

    public render() {

        return (
            <div>
                <h1>{this.state.json["Project Title"]}</h1>
            </div>);
    }

    private parseInputFilename(filename: string) {
        const fileText: string = fs.readFileSync(filename, "utf8");
        const json: IJSONProtocol = JSON.parse(fileText);

        return json;
    }
}
