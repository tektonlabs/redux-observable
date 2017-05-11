import React, { PropTypes } from 'react';
import './styles.css';

const Tab = ({
  name,
  label,
  isActive,
  onSetActiveTab,
}) => (
  <button
    className={`tab ${isActive ? 'is-active' : ''}`}
    onClick={onSetActiveTab}
  >
    <span className="tab-label">{label}</span>
  </button>
);

Tab.displayName = 'Tab';

Tab.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onSetActiveTab: PropTypes.func.isRequired,
};

export default Tab;
