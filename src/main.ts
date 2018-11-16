import * as express from "express";
import fs = require("fs");
import opn = require("opn");
import os = require("os");
import * as readline from "readline";
import DBClient from "./database/dbClient";
import Server from "./server/server";

// Create a new server object to handle server requests.
const server: Server = new Server(9595);

const db: DBClient = new DBClient("./data");

// Open a new tab in browser and display the contents.
// opn("http://localhost:" + port.toString());
