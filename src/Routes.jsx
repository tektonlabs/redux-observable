import React from 'react';
import { Route } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';
import App from './App';

const history = createHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/watched" component={App} />
      <Route exact path="/to-watch" component={App} />
    </div>
  </ConnectedRouter>
);

Routes.displayName = 'Routes';

export default Routes;
