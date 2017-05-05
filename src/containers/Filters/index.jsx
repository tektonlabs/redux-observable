import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selector, constants } from 'modules/ActiveFilter';
import TabBar from 'components/TabBar';

const tabBarData = [
  {
    name: constants.ALL,
    label: 'ALL',
  },
  {
    name: constants.TO_WATCH,
    label: 'TO WATCH',
  },
  {
    name: constants.WATCHED,
    label: 'WATCHED',
  },
];

const pushMap = {};
pushMap[constants.ALL] = '/';
pushMap[constants.TO_WATCH] = '/to-watch';
pushMap[constants.WATCHED] = '/watched';

const Filters = ({ activeFilter, push }) => (
  <TabBar
    activeTab={activeFilter}
    setActiveTab={(tabName) => { push(pushMap[tabName]); }}
    data={tabBarData}
  />
);

Filters.displayName = 'Filters';

Filters.propTypes = {
  activeFilter: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  activeFilter: selector.getActiveFilter(state),
});

const mapDispatchToProps = {
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
