import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Main from './pages/Main'
import Box from './pages/Box'
import Boxes from './pages/Boxes'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" component={Boxes} exact />
            <Route path="/create" component={Main} exact />
            <Route path="/box/:id" component={Box} />
        </Switch>
    </BrowserRouter>
);

export default Routes