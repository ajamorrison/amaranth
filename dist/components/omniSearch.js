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
var debounce_1 = require("debounce");
var React = require("react");
var semantic_ui_react_1 = require("semantic-ui-react");
var searchResults = {
    "sensor": {
        name: "sensor",
        results: [
            {
                title: "Little, Kihn and Leffler",
                description: "Multi-layered motivating application"
            },
            {
                title: "Howe Group",
                description: "Multi-layered composite knowledge base"
            },
            {
                title: "Welch, Welch and Bernhard",
                description: "Grass-roots web-enabled system engine"
            },
            {
                title: "Volkman, Rohan and Buckridge",
                description: "Synchronised mission-critical utilisation"
            },
            {
                title: "Homenick, Tremblay and Abernathy",
                description: "Switchable leading edge open architecture"
            },
        ]
    },
    "hard drive": {
        name: "hard drive",
        results: [
            {
                title: "Hyatt, Mosciski and Aufderhar",
                description: "Versatile bandwidth-monitored pricing structure"
            },
            {
                title: "Berge Group",
                description: "Proactive modular frame"
            },
            {
                title: "Cronin, Batz and Bergstrom",
                description: "Right-sized well-modulated flexibility"
            },
            {
                title: "Quigley, Stanton and Hyatt",
                description: "Face to face tangible superstructure"
            },
            {
                title: "Armstrong, Thiel and Wuckert",
                description: "Synchronised intermediate budgetary management"
            },
        ]
    }
};
var OmniSearch = (function (_super) {
    __extends(OmniSearch, _super);
    function OmniSearch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resetComponent = function () { return _this.setState({ isLoading: false, results: searchResults, value: "" }); };
        _this.handleSearchChange = function (e, _a) {
            var value = _a.value;
            _this.setState({ isLoading: true, value: value });
            setTimeout(function () {
                var xhr = new XMLHttpRequest();
                xhr.open("GET", "/search?q=" + _this.state.value);
                xhr.send(null);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status === 200) {
                            console.log("Record Found");
                        }
                        else {
                            console.log("Record Not Found");
                        }
                    }
                };
                _this.setState({
                    isLoading: false
                });
            }, 500);
        };
        return _this;
    }
    OmniSearch.prototype.componentWillMount = function () {
        this.resetComponent();
    };
    OmniSearch.prototype.isLoading = function () {
        this.setState({ isLoading: true });
    };
    OmniSearch.prototype.render = function () {
        var _a = this.state, isLoading = _a.isLoading, value = _a.value, results = _a.results;
        return (React.createElement(semantic_ui_react_1.Search, { onSearchChange: debounce_1.debounce(this.handleSearchChange, 100, true), results: results, value: value, loading: isLoading, category: true, style: {
                position: "absolute",
                top: "50px",
                left: "50%",
                transform: "translate(-50%, -50%)"
            } }));
    };
    return OmniSearch;
}(React.Component));
exports["default"] = OmniSearch;
//# sourceMappingURL=omniSearch.js.map