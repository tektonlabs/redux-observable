import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  setActiveTab,
  selector,
  constants,
} from 'modules/ActiveTab';
import TabBar from 'components/TabBar';

const tabsData = [
  {
    name: constants.EXPLORE,
    label: 'Explore',
  },
  {
    name: constants.SAVED,
    label: 'Saved',
  },
];

const NavBar = ({
  activeTab,
  setActiveTab,
}) => (
  <TabBar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    data={tabsData}
  />
);

NavBar.displayName = 'NavBar';

NavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  activeTab: selector.getActiveTab(state),
});

const mapDispatchToProps = {
  setActiveTab,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
