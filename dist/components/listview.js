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
var ListView = (function (_super) {
    __extends(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {};
        return _this;
    }
    ListView.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Table, { celled: true, striped: true },
            React.createElement(semantic_ui_react_1.Table.Header, null,
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.HeaderCell, { colSpan: "3" }, "Git Repository"))),
            React.createElement(semantic_ui_react_1.Table.Body, null,
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.Cell, { collapsing: true },
                        React.createElement(semantic_ui_react_1.Icon, { name: "folder" }),
                        " node_modules"),
                    React.createElement(semantic_ui_react_1.Table.Cell, null, "Initial commit"),
                    React.createElement(semantic_ui_react_1.Table.Cell, { collapsing: true, textAlign: "right" }, "10 hours ago")),
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.Cell, null,
                        React.createElement(semantic_ui_react_1.Icon, { name: "folder" }),
                        " test"),
                    React.createElement(semantic_ui_react_1.Table.Cell, null, "Initial commit"),
                    React.createElement(semantic_ui_react_1.Table.Cell, { textAlign: "right" }, "10 hours ago")),
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.Cell, null,
                        React.createElement(semantic_ui_react_1.Icon, { name: "folder" }),
                        " build"),
                    React.createElement(semantic_ui_react_1.Table.Cell, null, "Initial commit"),
                    React.createElement(semantic_ui_react_1.Table.Cell, { textAlign: "right" }, "10 hours ago")),
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.Cell, null,
                        React.createElement(semantic_ui_react_1.Icon, { name: "file outline" }),
                        " package.json"),
                    React.createElement(semantic_ui_react_1.Table.Cell, null, "Initial commit"),
                    React.createElement(semantic_ui_react_1.Table.Cell, { textAlign: "right" }, "10 hours ago")),
                React.createElement(semantic_ui_react_1.Table.Row, null,
                    React.createElement(semantic_ui_react_1.Table.Cell, null,
                        React.createElement(semantic_ui_react_1.Icon, { name: "file outline" }),
                        " Gruntfile.js"),
                    React.createElement(semantic_ui_react_1.Table.Cell, null, "Initial commit"),
                    React.createElement(semantic_ui_react_1.Table.Cell, { textAlign: "right" }, "10 hours ago")))));
    };
    return ListView;
}(React.Component));
exports["default"] = ListView;
//# sourceMappingURL=listview.js.map