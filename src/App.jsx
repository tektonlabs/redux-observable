import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

const App = () => (
  <Router>
    <div>
      <Route exact path="/" render={() => <h1>Home</h1>} />
    </div>
  </Router>
);

App.displayName = 'App';

export default App;
