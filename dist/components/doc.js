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
/** Displays the content of a single
 * document in the interface.
 */
var Doc = /** @class */ (function (_super) {
    __extends(Doc, _super);
    function Doc(props) {
        return _super.call(this, props) || this;
    }
    Doc.prototype.render = function () {
        return (React.createElement(antd_1.Card, { title: "Card title", style: { width: 300 } },
            React.createElement("p", null, "Lorem Ipsum sit dolar amet.")));
    };
    return Doc;
}(React.Component));
exports["default"] = Doc;
//# sourceMappingURL=doc.js.map