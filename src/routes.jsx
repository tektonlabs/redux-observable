import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import App from './App';

const Routes = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
);

Routes.displayName = 'Routes';

export default Routes;
