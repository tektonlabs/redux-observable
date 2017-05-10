import React, { PropTypes } from 'react';
import './styles.css';

const NavTab = ({
  name,
  label,
  isActive,
  onSetActiveTab,
}) => (
  <div className="nav-tab">
    <span className={`nav-tab-icon is-${name}`} />
    <span className="nav-tab-label">{label}</span>
  </div>
);

NavTab.displayName = 'NavTab';

NavTab.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default NavTab;
