import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory';
import App from './App';
import Explore from 'components/Explore';
import Saved from 'components/Saved';

const history = createHistory();

const Routes = () => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Redirect exact from="/" to="/saved/all" />
        <Route path="/saved/:filter?" component={Saved} />
        <Route path="/explore" component={Explore} />
      </Switch>
    </App>
  </ConnectedRouter>
);

Routes.displayName = 'Routes';

export default Routes;
