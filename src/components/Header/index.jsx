import React, { PropTypes } from 'react';
import SearchBar from 'containers/SearchBar';
import './style.css';

const Header = ({ hasSearch }) => (
  <div className={`header-container ${hasSearch ? 'has-search' : ''}`}>
    <h1 className="header-title">Movie App</h1>
    {hasSearch && <SearchBar />}
  </div>
);

Header.displayName = 'Header';

Header.defaultProps = {
  hasSearch: false,
}

Header.propTypes = {
  hasSearch: PropTypes.bool.isRequired,
};

export default Header;
