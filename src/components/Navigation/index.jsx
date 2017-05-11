import React from 'react';
import { NavLink } from 'react-router-dom';
import TabBar from 'components/TabBar';
import NavTab from 'components/NavTab';

const navTabsData = [
  {
    to: '/explore',
    name: 'explore',
    label: 'Explore',
  },
  {
    to: '/saved',
    name: 'saved',
    label: 'Saved',
  },
];

const Navigation = () => (
  <TabBar type="nav">
    {navTabsData.map(tab => (
      <NavLink
        key={tab.name}
        className="nav-tab-link"
        activeClassName="is-active"
        to={tab.to}
      >
        <NavTab
          name={tab.name}
          label={tab.label}
        />
      </NavLink>
    ))}
  </TabBar>
);

Navigation.displayName = 'Navigation';

export default Navigation;
