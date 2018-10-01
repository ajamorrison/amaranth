import { Button } from "antd";
import fs = require("fs");
import * as React from "react";

interface JSONProtocolInterface {
    "Project Title": string;
}

export default class App extends React.Component<{}, { json: JSONProtocolInterface }> {

    constructor(props: any) {
        super(props);

        this.state = {
            json: this.jsonFileToMap("./data/testImageCaption.json"),
        };
    }

    public render() {

        return (
            <div>
                <h1>{this.state.json["Project Title"]}</h1>
            </div>);
    }

    private jsonFileToMap(filename: string) {
        const fileText: string = fs.readFileSync(filename, "utf8");
        const json: JSONProtocolInterface = JSON.parse(fileText);

        return json;
    }
}
