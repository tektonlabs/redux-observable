import React, { PropTypes } from 'react';
import ToWatchList from 'containers/ToWatchList';

const App = ({ className }) => {
  return (
    <div>
      <ToWatchList />
    </div>
  );
};

App.displayName = 'App';

App.propTypes = {
  className: PropTypes.string,
};

export default App;

