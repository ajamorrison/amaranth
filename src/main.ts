import opn = require("opn");
import log from "./lambda/logger";
import Server from "./server/server";


log("Process Started", "process");

// Create a new server object to handle server requests.
const server: Server = new Server(80);
