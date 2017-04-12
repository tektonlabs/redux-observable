import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const ToWatchList = ({ className }) => {
  return (
    <div>Hello ToWatchList</div>
  );
};

ToWatchList.displayName = 'ToWatchList';

ToWatchList.propTypes = {
    className: PropTypes.string,
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(ToWatchList);
