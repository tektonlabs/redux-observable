import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'containers/SearchBar';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';
import { setFilter } from 'modules/Filter';
import './App.css';

class App extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    location: PropTypes.object,
    match: PropTypes.object,
    setFilter: PropTypes.func,
  };

  componentDidMount() {
    const {
      location,
      setFilter
    } = this.props;

    setFilter(location.pathname);
  }

  render() {
    return (
      <div>
        <SearchBar />
        <div>
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
  setFilter,
};

export default connect(
  null,
  mapDispatchToProps
)(App);
