import * as fs from "fs";
import log from "../lambda/logger";
import DBFile from "./dbFile";

/**
 * Handles all DB interactions, including caching and search passes.
 */
export default class DBClient {

    public fileList: DBFile[];

    /**
     * Takes in a folder or single file, and passes
     * over it, invoking the DB node constructor on
     * each JSON file instance.
     *
     * @param diskPath Absolute path to file/directory object on user's disk.
     */
    public constructor(diskPath: string) {

        this.fileList = new Array<DBFile>();

        this.buildFiles(diskPath);
    }

    public buildFiles(path: string) {

        if (fs.lstatSync(path).isDirectory()) {

            log("Iterating through directory " + path, "db");
            // pass over direcotry objects.
            fs.readdir(path, (err, items) => {
                for (const item of items) {
                    // Recursively pass through each subdirectory
                    this.buildFiles(path + "/" + item);
                }
            });
        } else {
            this.fileList.push(new DBFile(path));
        }
    }
}
