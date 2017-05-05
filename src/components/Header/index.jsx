import React, { PropTypes } from 'react';
import SearchBar from 'containers/SearchBar';

const Header = ({ hasSearch }) => (
  <div>
    <h1>Movie App</h1>
    {hasSearch && <SearchBar />}
  </div>
);

Header.displayName = 'Header';

Header.propTypes = {
  hasSearch: PropTypes.bool.isRequired,
};

export default Header;
