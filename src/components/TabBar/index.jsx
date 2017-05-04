import React, { PropTypes } from 'react';
import Tab from 'components/Tab';
import './styles.css';

const TabBar = ({
  activeTab,
  setActiveTab,
  data,
}) => (
  <div className="tab-bar-container">
    {data.map(tab => (
      <Tab
        key={tab.name}
        name={tab.name}
        label={tab.label}
        isActive={activeTab === tab.name}
        onSetActiveTab={() => { setActiveTab(tab.name); }}
      />
    ))}
  </div>
);

TabBar.displayName = 'TabBar';

TabBar.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
};

export default TabBar;
