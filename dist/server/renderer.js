"use strict";
exports.__esModule = true;
var fs = require("fs");
var React = require("react");
var server_1 = require("react-dom/server");
var app_1 = require("../components/app");
var Renderer = /** @class */ (function () {
    function Renderer() {
        var _this = this;
        fs.readFile(process.cwd() + "/views/index.html", "utf8", function (err, data) {
            _this.baseTemplate = data;
            process.stdout.write("SSR | Base template rendered.\n");
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