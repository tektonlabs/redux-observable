import React, { PropTypes } from 'react';
import TabContent from 'components/TabContent';

const TabContainer = ({
  activeTab,
  children,
}) => (
  <div>
    {children.map(tab => (
      <TabContent
        key={tab.props.name}
        isActive={activeTab === tab.props.name}
      >
        {tab.props.children}
      </TabContent>
    ))}
  </div>
);

TabContainer.displayName = 'TabContainer';

TabContainer.propTypes = {
  activeTab: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default TabContainer;
