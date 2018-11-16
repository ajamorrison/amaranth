"use strict";
// Client script to rehydrate the react components, attach DOM bindings.
exports.__esModule = true;
var React = require("react");
var ReactDOM = require("react-dom");
var app_1 = require("./components/app");
ReactDOM.hydrate(React.createElement(app_1["default"]), document.getElementById("app"));
var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
xmlhttp.open("POST", "/json-handler");
xmlhttp.setRequestHeader("Content-Type", "application/json");
xmlhttp.send(JSON.stringify({ name: "John Rambo", time: "2pm" }));
//# sourceMappingURL=client.js.map