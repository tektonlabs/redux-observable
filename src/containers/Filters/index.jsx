import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const Filters = ({ pathname }) => {
  console.log(pathname);
  const filterMap = {
    '/': 'ALL',
    '/to-watch': 'TOWATCH',
    '/watched': 'WATCHED'
  };

  const activeFilter = filterMap[pathname] || 'ALL';

  console.log(activeFilter);

  return (
    <div>holi</div>
  );
};

Filters.displayName = 'Filters';

Filters.propTypes = {
  className: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => ({
  pathname: ownProps,
});

export default connect(mapStateToProps)(Filters);
