import React, { PropTypes } from 'react';
import './styles.css';

const TabBar = ({
  type,
  children,
}) => (
  <nav className={`tab-bar-container is-${type}`}>
    {children}
  </nav>
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
