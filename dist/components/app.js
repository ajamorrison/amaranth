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
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var doc_1 = require("./doc");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            collapsed: false
        };
        _this.onCollapse = function (collapsed) {
            _this.setState({ collapsed: collapsed });
        };
        return _this;
    }
    App.prototype.handleClick = function () {
        // TODO Impliment handling for killing server process remotely.
    };
    App.prototype.searchRequest = function (value) {
        // TODO: send AJAX request to server for a list of documents
        // Trigger a re-render on the client side or do it in the server
        // again?
    };
    App.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Input, { icon: "search", placeholder: "Search..." }),
            React.createElement(semantic_ui_react_1.Button, { color: "red", content: "Close Server", icon: "close", labelPosition: "left" }),
            React.createElement(doc_1["default"], { name: "hello", type: "string" })));
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=app.js.map