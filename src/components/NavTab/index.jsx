import React, { PropTypes } from 'react';
import './styles.css';

const NavTab = ({
  name,
  label,
  isActive,
  onSetActiveTab,
}) => (
  <button
    className={`nav-tab ${isActive ? 'is-active' : ''}`}
    onClick={onSetActiveTab}
    disabled={isActive}
  >
    <span className={`nav-tab-icon is-${name}`}></span>
    <span className="nav-tab-label">{label}</span>
  </button>
);

NavTab.displayName = 'NavTab';

NavTab.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSetActiveTab: PropTypes.func.isRequired,
};

export default NavTab;
