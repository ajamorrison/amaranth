"use strict";
exports.__esModule = true;
var dbClient_1 = require("./database/dbClient");
var server_1 = require("./server/server");
// Create a new server object to handle server requests.
var server = new server_1["default"](9595);
var db = new dbClient_1["default"]("./data");
// Open a new tab in browser and display the contents.
// opn("http://localhost:" + port.toString());
//# sourceMappingURL=main.js.map