import React, { PropTypes } from 'react';
import NavTab from 'components/NavTab';
import './styles.css';

const NavBar = ({
  activeTab,
  setActiveTab,
  data,
}) => (
  <div className="nav-bar-container">
    {data.map(tab => (
      <NavTab
        key={tab.name}
        name={tab.name}
        label={tab.label}
        isActive={activeTab === tab.name}
        onSetActiveTab={() => { setActiveTab(tab.name); }}
      />
    ))}
  </div>
);

NavBar.displayName = 'NavBar';

NavBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default NavBar;
