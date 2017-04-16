import React, { PropTypes } from 'react';
import SearchBar from 'containers/SearchBar';
import FetchedMovies from 'containers/FetchedMovies';

const App = ({ className }) => {
  return (
    <div>
      <SearchBar />
      <FetchedMovies />
    </div>
  );
};

App.displayName = 'App';

App.propTypes = {
  className: PropTypes.string,
};

export default App;

