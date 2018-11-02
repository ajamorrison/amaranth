"use strict";
exports.__esModule = true;
var fs = require("fs");
var React = require("react");
var server_1 = require("react-dom/server");
var app_1 = require("../components/app");
var Page = /** @class */ (function () {
    function Page() {
        var _this = this;
        this.reactDom = server_1.renderToString(React.createElement(app_1["default"], null));
        fs.readFile(process.cwd() + "/views/index.html", "utf8", function (err, data) {
            _this.data = data;
            _this.data = _this.data.replace("$app", reactDom);
        });
    }
    return Page;
}());
exports["default"] = Page;
//# sourceMappingURL=page.js.map