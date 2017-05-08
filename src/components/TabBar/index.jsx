import React, { PropTypes } from 'react';
import './styles.css';

const TabBar = ({
  type,
  children,
}) => (
  <div className={`tab-bar-container is-${type}`}>
    {children}
  </div>
);

TabBar.displayName = 'TabBar';

TabBar.defaultProps = {
  type: 'tab',
};

TabBar.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default TabBar;
