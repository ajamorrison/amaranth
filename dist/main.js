"use strict";
exports.__esModule = true;
var logger_1 = require("./lambda/logger");
var server_1 = require("./server/server");
logger_1["default"]("Process Started", "process");
var server = new server_1["default"](80);
//# sourceMappingURL=main.js.map