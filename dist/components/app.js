"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var preloader_1 = require("./preloader");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeItem: "editorials",
            visible: false
        };
        _this.toggleSidebar = function () { return _this.setState({ visible: !_this.state.visible }); };
        _this.handleMenuClick = function (e, _a) {
            var name = _a.name;
            return _this.setState({ activeItem: name });
        };
        return _this;
    }
    App.prototype.closeServer = function () {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "/?close=true");
        xhr.send(null);
        xhr.onreadystatechange = function () {
            var DONE = 4;
            var OK = 200;
            if (xhr.readyState === DONE) {
                if (xhr.status === OK) {
                    document.getElementById("close-server").innerHTML = "Server Closed";
                }
                else {
                    console.log("Error: " + xhr.status);
                }
            }
        };
    };
    App.prototype.render = function () {
        var visible = this.state.visible;
        return (React.createElement("div", null,
            React.createElement(preloader_1["default"], null),
            React.createElement(semantic_ui_react_1.Menu, { secondary: true, size: "mini" },
                React.createElement(semantic_ui_react_1.Menu.Item, null,
                    React.createElement(semantic_ui_react_1.Button, { basic: true, onClick: this.toggleSidebar, icon: true, labelPosition: "right" },
                        React.createElement(semantic_ui_react_1.Icon, { name: "database" }),
                        "Configure Dataserver")),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "editorials", active: this.state.activeItem === "editorials", onClick: this.handleMenuClick }, "Editorials"),
                React.createElement(semantic_ui_react_1.Menu.Item, { name: "reviews", active: this.state.activeItem === "reviews", onClick: this.handleMenuClick }, "Reviews"),
                React.createElement(semantic_ui_react_1.Menu.Menu, { position: "right" },
                    React.createElement(semantic_ui_react_1.Menu.Item, null,
                        React.createElement(semantic_ui_react_1.Button, { id: "close-server", size: "mini", color: "red", onClick: this.closeServer }, "Close Server")))),
            React.createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment },
                React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: "push", icon: "labeled", vertical: true, width: "wide", visible: visible }),
                React.createElement(semantic_ui_react_1.Sidebar.Pusher, { style: { padding: 5, minHeight: "90vh" } },
                    React.createElement("h1", null, "Content")))));
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=app.js.map