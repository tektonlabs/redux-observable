import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  setActiveTab,
  selector,
  constants,
} from 'modules/ActiveTab';
import NavBar from 'components/NavBar';

const navBarData = [
  {
    name: constants.EXPLORE,
    label: 'Explore',
  },
  {
    name: constants.SAVED,
    label: 'Saved',
  },
];

const Navigation = ({
  activeTab,
  setActiveTab,
}) => (
  <NavBar
    activeTab={activeTab}
    setActiveTab={setActiveTab}
    data={navBarData}
  />
);

Navigation.displayName = 'Navigation';

Navigation.propTypes = {
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
)(Navigation);
