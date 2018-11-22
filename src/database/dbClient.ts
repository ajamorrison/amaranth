import * as fs from "fs";
import * as path from "path";
import log from "../lambda/logger";

export default class DBClient {

    public data: Map<string, object>;

    private directoryPath: string;

    public constructor(pathname: string) {

        this.directoryPath = process.cwd() + pathname;
        this.data = new Map();

        log("Creating DB from folder " + this.directoryPath, "DB");

        fs.readdir(this.directoryPath, (err, files) => {
            files.forEach((file) => {

                path.parse(path + file.toString());

                if (file.endsWith(".json")) {

                    // File is in JSON format, therefore package into a DB object so we
                    // can index it and stuff.

                    fs.readFile(this.directoryPath + "\\" + file, "utf8", (error, JSONdata) => {
                        this.data.set(file, JSON.parse(JSONdata));

                        log("JSON Instance Created of " + file, "DB");
                    });

                } else {
                    log("Generic instance created of " + file, "DB");
                }

            });
        });
    }

    public get(id: string, key: string): any {
        const obj: object =  this.data.get(id);

        return (obj as any)[key];
    }
}
