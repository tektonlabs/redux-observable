import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { selector, constants } from 'modules/Filter';

const Filters = ({ filter, push }) => (
  <div>
    <ul>
      <li onClick={() => push('/')}>
        <button disabled={filter === constants.ALL}>
          ALL
        </button>
      </li>
      <li onClick={() => push('/to-watch')}>
        <button disabled={filter === constants.TO_WATCH}>
          TO WATCH
        </button>
      </li>
      <li onClick={() => push('/watched')}>
        <button disabled={filter === constants.WATCHED}>
          WATCHED
        </button>
      </li>
    </ul>
  </div>
);

Filters.displayName = 'Filters';

Filters.propTypes = {
  filter: PropTypes.string.isRequired,
  push: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  filter: selector.getFilter(state),
});

const mapDispatchToProps = {
  push,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Filters);
