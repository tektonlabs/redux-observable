import React, { PureComponent, PropTypes } from 'react';
import { connect } from 'react-redux';
import { setActiveFilter } from 'modules/ActiveFilter';
import {
  selector as activeTabSelector,
  constants as activeTabConstants,
} from 'modules/ActiveTab';
import FetchedMovies from 'containers/FetchedMovies';
import ToWatchList from 'containers/ToWatchList';
import Filters from 'containers/Filters';
import Navigation from 'containers/Navigation';
import Header from 'components/Header';
import TabContainer from 'components/TabContainer';
import TabContent from 'components/TabContent';
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
      history,
      match,
      location,
      setActiveFilter,
    } = this.props;

    console.log(history);
    console.log(location);
    console.log(match);
    setActiveFilter(location.pathname);
  }

  render() {
    const {
      activeTab,
    } = this.props;

    return (
      <div>
        <Header
          hasSearch={activeTab === activeTabConstants.EXPLORE}
        />
        <TabContainer
          activeTab={activeTab}
        >
          <TabContent
            name={activeTabConstants.EXPLORE}
          >
            <FetchedMovies />
          </TabContent>
          <TabContent
            name={activeTabConstants.SAVED}
          >
            <Filters />
            <ToWatchList />
          </TabContent>
        </TabContainer>
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
