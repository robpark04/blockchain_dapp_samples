import React from 'react';
import "core-js/stable";
import "regenerator-runtime/runtime";
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';

import App from "./App";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import buildStore from './stores/store';
import { ConnectedRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const store = buildStore(history, {});

const root = document.querySelector("#root");
if (!root) throw new Error("no root element!");

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();