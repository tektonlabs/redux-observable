import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const FetchedMovies = ({ className }) => {
  return (
    <div>fetched movies</div>
  );
};

FetchedMovies.displayName = 'FetchedMovies';

FetchedMovies.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = () => ({});

export default connect(
  mapStateToProps
)(FetchedMovies);
