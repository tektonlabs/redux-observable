import React, { PropTypes } from 'react';
import './styles.css';

const EmptyListMessage = ({ title, message, children }) => (
  <div className="empty-list-container">
    <p className="empty-list-text-wrapper">
      <span className="empty-list-title">{title}</span>
      <span className="empty-list-message">{message}</span>
    </p>
    {children}
  </div>
);

EmptyListMessage.displayName = 'EmptyListMessage';

EmptyListMessage.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default EmptyListMessage;
