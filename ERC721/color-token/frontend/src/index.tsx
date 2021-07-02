import "core-js/stable";
import "regenerator-runtime/runtime";
import * as serviceWorker from './serviceWorker';

import { render } from "react-dom";

import App from "./App";

const root = document.querySelector("#root");
if (!root) throw new Error("no root element!");

render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();