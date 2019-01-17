// Client script to rehydrate the react components, attach DOM bindings.

import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app";

ReactDOM.hydrate(React.createElement(App), document.getElementById("app"));
