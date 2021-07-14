import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import { history } from './_helpers'

import HomePage from './Pages/HomePage'

function App() {

    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Redirect from="*" to="/" />
                </Switch>
            </Router>
        </div>
    );
}

export default App;