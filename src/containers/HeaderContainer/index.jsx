import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  selector as activeTabSelector,
  constants as activeTabConstants,
} from 'modules/ActiveTab';
import Header from 'components/Header';

const HeaderContainer = ({ pathname }) => (
  <Header hasSearch={pathname === '/explore'} />
);

HeaderContainer.displayName = 'HeaderContainer';

HeaderContainer.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  pathname: state.get('router').location.pathname,
});

export default connect(
  mapStateToProps,
  null
)(HeaderContainer);
