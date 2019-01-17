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
var Preloader = (function (_super) {
    __extends(Preloader, _super);
    function Preloader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeItem: "editorials",
            visible: false
        };
        return _this;
    }
    Preloader.prototype.render = function () {
        var visible = this.state.visible;
        return (React.createElement("div", { style: { height: "100vh", width: "100vw", position: "fixed" } },
            React.createElement(semantic_ui_react_1.Segment, { style: {
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    minWidth: 300
                } },
                React.createElement(semantic_ui_react_1.Progress, { percent: 50, attached: "top" }),
                "Hi, just getting everything sorted...")));
    };
    return Preloader;
}(React.Component));
exports["default"] = Preloader;
//# sourceMappingURL=preloader.js.map