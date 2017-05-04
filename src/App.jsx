import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import SearchBar from 'containers/SearchBar';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';
import NavBar from 'containers/NavBar';
import { setFilter } from 'modules/Filter';
import {
  selector as activeTabSelector,
  constants as activeTabConstants,
} from 'modules/ActiveTab';
import './App.css';

class App extends PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired,
    activeTab: PropTypes.string.isRequired,
    setFilter: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      location,
      setFilter
    } = this.props;

    setFilter(location.pathname);
  }

  render() {
    const {
      activeTab,
    } = this.props;

    const isSearchActive = activeTab === activeTabConstants.EXPLORE;
    const isWatchListActive = activeTab === activeTabConstants.SAVED;

    return (
      <div className="app-container">
        <div
          className={`search-container ${isSearchActive ? 'is-active' : '' }`}
        >
          <SearchBar />
          <FetchedMovies />
        </div>
        <div className={`watch-list-container ${isWatchListActive ? 'is-active' : ''}`}>
          <Filters />
          <ToWatchList />
        </div>
        <NavBar />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeTab: activeTabSelector.getActiveTab(state),
});

const mapDispatchToProps = {
  setFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
