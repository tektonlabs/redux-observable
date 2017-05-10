import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  setActiveTab,
  selector,
  constants,
} from 'modules/ActiveTab';
import TabBar from 'components/TabBar';
import NavTab from 'components/NavTab';

const Navigation = ({
  activeTab,
  setActiveTab,
}) => (
  <TabBar type="nav">
    <NavLink
      className="nav-tab-link"
      activeClassName="is-active"
      to="/explore"
    >
      <NavTab
        name={constants.EXPLORE}
        label="Explore"
      />
    </NavLink>
    <NavLink
      className="nav-tab-link"
      activeClassName="is-active"
      to="/saved"
    >
      <NavTab
        name={constants.SAVED}
        label="Saved"
      />
    </NavLink>
  </TabBar>
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
