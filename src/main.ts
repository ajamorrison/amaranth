import * as express from "express";
import fs = require("fs");
import opn = require("opn");
import os = require("os");
import * as readline from "readline";
import log from "./lambda/logger";
import Server from "./server/server";


log("Process Started", "process");

// Create a new server object to handle server requests.
const server: Server = new Server(9595);

// Open a new tab in browser and display the contents.
// opn("http://localhost:" + port.toString());
