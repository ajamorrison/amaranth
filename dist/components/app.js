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
var listview_1 = require("./listview");
var App = (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            visible: true
        };
        _this.toggleSidebar = function () { return _this.setState({ visible: !_this.state.visible }); };
        return _this;
    }
    App.prototype.closeServer = function () {
    };
    App.prototype.searchRequest = function (value) {
    };
    App.prototype.render = function () {
        var visible = this.state.visible;
        return (React.createElement("div", null,
            React.createElement(semantic_ui_react_1.Button.Group, { style: { padding: 10 } },
                React.createElement(semantic_ui_react_1.Button, { basic: true, onClick: this.toggleSidebar, icon: true },
                    React.createElement(semantic_ui_react_1.Icon, { name: "sidebar" }))),
            React.createElement(semantic_ui_react_1.Sidebar.Pushable, { as: semantic_ui_react_1.Segment },
                React.createElement(semantic_ui_react_1.Sidebar, { as: semantic_ui_react_1.Menu, animation: "push", icon: "labeled", vertical: true, visible: visible, width: "wide", style: { padding: 5 } },
                    React.createElement(semantic_ui_react_1.Header, { as: "h3" }, "Amaranthus"),
                    React.createElement(semantic_ui_react_1.Input, { fluid: true, icon: "search", placeholder: "Search..." })),
                React.createElement(semantic_ui_react_1.Sidebar.Pusher, null,
                    React.createElement(semantic_ui_react_1.Segment, { basic: true },
                        React.createElement(semantic_ui_react_1.Header, { as: "h3" }, "Application Content"),
                        React.createElement(listview_1["default"], null))))));
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=app.js.map