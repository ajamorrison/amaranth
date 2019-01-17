import * as fs from "fs";
import log from "../lambda/logger";

/**
 * Describes
 *
 * @param isPrimitive Is the object a primitive JSON type
 * @param type type descriptor for the object
 * @param plaintext JSON plaintext representation of the object
 */
export default class DBFile {

    /** Filetype of the object */
    public type: string;

    /** Data object */
    public obj: any;

    /** Stripped JSON string representation */
    public plaintext: string;

    /** Relative path to where the object was last saved. */
    public filePath: string;

    /** Globally unique ID in base 16 string */
    public guid: string;

    /**
     * Build a new DB Object from
     * @param pathToFile absolute path to File object.
     */
    constructor( fileLocation: string ) {
        log("Creating new DB file instance " + fileLocation, "db");
    }
}
