import React, { PropTypes } from 'react';
import HeaderContainer from 'containers/HeaderContainer';
import Navigation from 'containers/Navigation';
import './App.css';

const App = ({ children }) => (
  <div>
    <HeaderContainer />
    {children}
    <Navigation />
  </div>
);

App.displayName = 'App';

App.propTypes = {
  children: PropTypes.node.isRequired,
};

export default App;
