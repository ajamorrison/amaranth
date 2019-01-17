"use strict";
exports.__esModule = true;
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var express = require("express");
var dbClient_1 = require("../database/dbClient");
var logger_1 = require("../lambda/logger");
var renderer_1 = require("./renderer");
var Server = (function () {
    function Server(port) {
        var _this = this;
        this.renderer = new renderer_1["default"]();
        this.dbClient = new dbClient_1["default"]("D:\\amaranthus\\data");
        this.port = port;
        this.app = express();
        this.app.use(express.static(process.cwd()));
        this.app.use(bodyParser.json());
        this.app.use(cookieParser("Some Secret String!"));
        this.app.listen(this.port);
        logger_1["default"]("Initialised server on port " + this.port.toString(), "server");
        this.app.get("*", function (req, res) {
            logger_1["default"]("PATH " + req.path + "| QUERY " +
                req.query.q + "| COOKIE " +
                req.cookies.user, "REQ");
            if (!req.cookies.userid) {
                logger_1["default"]("New session detected", "session");
                res.cookie("userid", "someID", { maxAge: 9000 });
            }
            res.send(_this.renderer.getPage());
        });
    }
    return Server;
}());
exports["default"] = Server;
//# sourceMappingURL=server.js.map