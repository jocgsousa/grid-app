import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Dashboard from './pages/Dashboard';

const routes = function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};

export default routes;
