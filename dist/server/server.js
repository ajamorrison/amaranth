"use strict";
exports.__esModule = true;
var express = require("express");
var fs = require("fs");
var React = require("react");
var server_1 = require("react-dom/server");
var app_1 = require("../components/app");
var requestHandler_1 = require("./requestHandler");
/**
 * The server component that handles routing and requests from a macro level.
 */
var Server = /** @class */ (function () {
    function Server(port) {
        var _this = this;
        process.stdout.write("Server initialised at " + port.toString() + "\n");
        var reactDom = server_1.renderToString(React.createElement(app_1["default"], null));
        fs.readFile(process.cwd() + "/views/index.html", "utf8", function (err, data) {
            process.stdout.write("Prerendering entry page...\n");
            _this.data = data;
            _this.data = _this.data.replace("$app", reactDom);
        });
        this.port = port;
        this.app = express();
        this.app.listen(this.port);
        this.app.use(express.static("."));
        this.app.get("*", function (req, res) {
            var handler = new requestHandler_1["default"](req);
            res.send(_this.data);
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