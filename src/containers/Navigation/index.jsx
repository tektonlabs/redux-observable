import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  setActiveTab,
  selector,
  constants,
} from 'modules/ActiveTab';
import TabBar from 'components/TabBar';
import NavTab from 'components/NavTab';

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
  <TabBar type="nav">
    {navBarData.map(tab => (
      <NavTab
        key={tab.name}
        name={tab.name}
        label={tab.label}
        isActive={activeTab === tab.name}
        onSetActiveTab={() => { setActiveTab(tab.name); }}
      />
    ))}
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
