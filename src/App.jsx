import React, { PropTypes } from 'react';
import Navigation from 'components/Navigation';
import './App.css';

const App = ({ children }) => (
  <div>
    {children}
    <Navigation />
  </div>
);

App.displayName = 'App';

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
