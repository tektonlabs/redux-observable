import React, { PropTypes } from 'react';

const App = ({ className }) => {
  return (
    <div>Hello</div>
  );
};

App.displayName = 'App';

App.propTypes = {
  className: PropTypes.string,
};

export default App;

