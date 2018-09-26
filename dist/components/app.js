"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var fs = require("fs");
var React = require("react");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            json: _this.parseInputFilename("./data/testImageCaption.json")
        };
        return _this;
    }
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("h1", null, this.state.json["Project Title"])));
    };
    App.prototype.parseInputFilename = function (filename) {
        var fileText = fs.readFileSync(filename, "utf8");
        var json = JSON.parse(fileText);
        return json;
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=app.js.map