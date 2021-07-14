import React from "react";
import { render } from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";

import App from "./App";

render(
    <App />,
    document.getElementById("root")
);

serviceWorker.unregister();
