import React, { PropTypes } from 'react';
import './styles.css';

const TabContent = ({ isActive, children }) => {
  return (
    <div className={`tab-content ${isActive ? 'is-active' : ''}`}>
      {children}
    </div>
  );
};

TabContent.displayName = 'TabContent';

TabContent.propTypes = {
  name: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default TabContent;
