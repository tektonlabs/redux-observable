import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Header from 'components/Header';
import FetchedMovies from 'containers/FetchedMovies';

const Explore = ({ pathname }) => {
  return (
    <div>
      <Header hasSearch={pathname === '/explore'} />
      <FetchedMovies />
    </div>
  );
};

Explore.displayName = 'Explore';

Explore.propTypes = {
  pathname: PropTypes.string.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps.location.pathname,
});

export default connect(mapStateToProps, null)(Explore);
