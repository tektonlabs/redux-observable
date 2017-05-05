import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';
import Navigation from 'containers/Navigation';
import Header from 'components/Header';
import TabContent from 'components/TabContent';
import { setActiveFilter } from 'modules/ActiveFilter';
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
    setActiveFilter: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const {
      location,
      setActiveFilter,
    } = this.props;

    setActiveFilter(location.pathname);
  }

  render() {
    const {
      activeTab,
    } = this.props;

    const isExploreActive = activeTab === activeTabConstants.EXPLORE;
    const isSavedActive = activeTab === activeTabConstants.SAVED;

    return (
      <div>
        <Header
          hasSearch={isExploreActive}
        />
        <TabContent
          isActive={isExploreActive}
        >
          <FetchedMovies />
        </TabContent>
        <TabContent
          isActive={isSavedActive}
        >
          <Filters />
          <ToWatchList />
        </TabContent>
        <Navigation />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  activeTab: activeTabSelector.getActiveTab(state),
});

const mapDispatchToProps = {
  setActiveFilter,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
