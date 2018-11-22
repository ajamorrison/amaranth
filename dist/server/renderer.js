"use strict";
exports.__esModule = true;
var fs = require("fs");
var React = require("react");
var server_1 = require("react-dom/server");
var app_1 = require("../components/app");
var logger_1 = require("../lambda/logger");
var Renderer = (function () {
    function Renderer() {
        var _this = this;
        fs.readFile(process.cwd() + "/views/index.html", "utf8", function (error, data) {
            _this.baseTemplate = data;
            logger_1["default"]("Initial page render", "SSR");
        });
    }
    Renderer.prototype.getPage = function () {
        var reactDom = server_1.renderToString(React.createElement(app_1["default"], null));
        return this.baseTemplate.replace("$app", reactDom);
    };
    return Renderer;
}());
exports["default"] = Renderer;
//# sourceMappingURL=renderer.js.map