"use strict";
exports.__esModule = true;
var express = require("express");
var dbClient_1 = require("../database/dbClient");
var logger_1 = require("../lambda/logger");
var renderer_1 = require("./renderer");
/**
 * The server component that handles routing and requests from a macro level.
 */
var Server = /** @class */ (function () {
    function Server(port) {
        var _this = this;
        this.renderer = new renderer_1["default"]();
        this.dbClient = new dbClient_1["default"]("./data");
        this.port = port;
        this.app = express();
        this.app.listen(this.port);
        this.app.use(express.static("."));
        logger_1["default"]("Initialised server", "server");
        this.app.get("*", function (req, res) {
            res.send(_this.renderer.getPage());
        });
        this.app.post("/send", function (req, res) {
            process.stdout.write("Submitted form data");
            res.sendStatus(200);
        });
    }
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map