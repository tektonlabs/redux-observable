import React from 'react';
import {  Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import App from './App';

const history = createHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <Route exact path="/:filter" component={App} />
  </ConnectedRouter>
);

Routes.displayName = 'Routes';

export default Routes;
