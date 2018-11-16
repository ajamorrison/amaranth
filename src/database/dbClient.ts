import * as fs from "fs";
import * as path from "path";

export default class DBClient {

    private directoryPath: string;
    private data: Map<string, object>;

    public constructor(pathname: string) {

        this.directoryPath = pathname;

        fs.readdir(this.directoryPath, (err, files) => {
            files.forEach((file) => {

                path.parse(path + file.toString());

                process.stdout.write("DB Instance created of: " + file.toString() + "\n");
            });
        });
    }
}
