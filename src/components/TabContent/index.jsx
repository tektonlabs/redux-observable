import React, { PropTypes } from 'react';
import './styles.css';

const TabContent = ({ children, isActive }) => {
  return (
    <div className={`tab-content ${isActive ? 'is-active' : ''}`}>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';

TabContent.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default TabContent;
