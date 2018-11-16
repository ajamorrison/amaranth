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
var antd_1 = require("antd");
var React = require("react");
var doc_1 = require("./doc");
var Header = antd_1.Layout.Header, Content = antd_1.Layout.Content, Footer = antd_1.Layout.Footer, Sider = antd_1.Layout.Sider;
var SubMenu = antd_1.Menu.SubMenu;
var Search = antd_1.Input.Search;
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
    App.prototype.searchRequest = function (value) {
        // TODO: send AJAX request to server for a list of documents
        // Trigger a re-render on the client side or do it in the server
        // again?
    };
    App.prototype.render = function () {
        return (React.createElement(antd_1.Layout, { style: { minHeight: "100vh" } },
            React.createElement(Sider, { collapsible: true, collapsed: this.state.collapsed, onCollapse: this.onCollapse, theme: "light" },
                React.createElement(Search, { placeholder: "input search text", onSearch: this.searchRequest, style: { padding: 5, width: "100%" } }),
                React.createElement(antd_1.Menu, { theme: "light", defaultSelectedKeys: ["1"], mode: "inline" },
                    React.createElement(antd_1.Menu.Item, { key: "1" },
                        React.createElement(antd_1.Icon, { type: "pie-chart" }),
                        React.createElement("span", null, "File")),
                    React.createElement(antd_1.Menu.Item, { key: "2" },
                        React.createElement(antd_1.Icon, { type: "desktop" }),
                        React.createElement("span", null, "Documents")),
                    React.createElement(SubMenu, { key: "sub1", title: React.createElement("span", null,
                            React.createElement(antd_1.Icon, { type: "user" }),
                            React.createElement("span", null, "User")) },
                        React.createElement(antd_1.Menu.Item, { key: "3" }, "Tom"),
                        React.createElement(antd_1.Menu.Item, { key: "4" }, "Bill"),
                        React.createElement(antd_1.Menu.Item, { key: "5" }, "Alex")),
                    React.createElement(SubMenu, { key: "sub2", title: React.createElement("span", null,
                            React.createElement(antd_1.Icon, { type: "stock" }),
                            React.createElement("span", null, "Data")) },
                        React.createElement(antd_1.Menu.Item, { key: "6" },
                            React.createElement(antd_1.Icon, { type: "pie-chart" }),
                            "Pie Chart"),
                        React.createElement(antd_1.Menu.Item, { key: "7" },
                            React.createElement(antd_1.Icon, { type: "bar-chart" }),
                            "Bar Chart"),
                        React.createElement(antd_1.Menu.Item, { key: "8" },
                            React.createElement(antd_1.Icon, { type: "dot-chart" }),
                            "Scatterplot"),
                        React.createElement(antd_1.Menu.Item, { key: "9" },
                            React.createElement(antd_1.Icon, { type: "line-chart" }),
                            "Line Chart"),
                        React.createElement(antd_1.Menu.Item, { key: "10" },
                            React.createElement(antd_1.Icon, { type: "radar-chart" }),
                            "Radar Chart")),
                    React.createElement(antd_1.Menu.Item, { key: "11" },
                        React.createElement(antd_1.Icon, { type: "setting" }),
                        React.createElement("span", null, "Options")))),
            React.createElement(antd_1.Layout, null,
                React.createElement(Content, { style: { margin: "16px" } },
                    React.createElement(doc_1["default"], { name: "hello", type: "hello" })))));
    };
    return App;
}(React.Component));
exports["default"] = App;
//# sourceMappingURL=app.js.map