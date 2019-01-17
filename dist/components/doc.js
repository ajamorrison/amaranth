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
var Doc = (function (_super) {
    __extends(Doc, _super);
    function Doc(props) {
        return _super.call(this, props) || this;
    }
    Doc.prototype.render = function () {
        return (React.createElement(semantic_ui_react_1.Card, null,
            React.createElement(semantic_ui_react_1.Card.Content, null,
                React.createElement(semantic_ui_react_1.Card.Header, null, "Matthew"),
                React.createElement(semantic_ui_react_1.Card.Meta, null,
                    React.createElement("span", { className: "date" }, "Joined in 2015")),
                React.createElement(semantic_ui_react_1.Card.Description, null, "Matthew is a musician living in Nashville.")),
            React.createElement(semantic_ui_react_1.Card.Content, { extra: true },
                React.createElement("a", null,
                    React.createElement(semantic_ui_react_1.Icon, { name: "user" }),
                    "22 Friends"))));
    };
    return Doc;
}(React.Component));
exports["default"] = Doc;
//# sourceMappingURL=doc.js.map