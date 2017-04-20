import React, { PropTypes } from 'react';
import SearchBar from 'containers/SearchBar';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';

const App = ({ className }) => {
  return (
    <div>
      <SearchBar />
      <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'space-between'
      }}>
        <FetchedMovies />
        <div>
          <ToWatchList />
          <Filters />
        </div>
      </div>
    </div>
  );
};

App.displayName = 'App';

App.propTypes = {
  className: PropTypes.string,
};

export default App;

