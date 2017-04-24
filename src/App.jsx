import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'containers/SearchBar';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';
import { setMoviesFilter } from 'modules/Movies';

class App extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    setMoviesFilter: PropTypes.func,
  };

  componentDidMount() {
    const {
      location,
      setMoviesFilter
    } = this.props;

    setMoviesFilter(location.pathname);
  }

  render() {
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
  }
}

const mapDispatchToProps = {
  setMoviesFilter,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
