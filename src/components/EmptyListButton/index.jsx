import React, { PropTypes } from 'react';
import EmptyListMessage from 'components/EmptyListMessage';
import './styles.css';

const EmptyListButton = ({
  title,
  message,
  buttonText,
  onButtonClick,
}) => (
  <EmptyListMessage
    title={title}
    message={message}
  >
    <button
      className="empty-list-button"
      onClick={onButtonClick}
    >
      <span className="empty-list-explore-icon"></span>
      {buttonText}
    </button>
  </EmptyListMessage>
);

EmptyListButton.displayName = 'EmptyListButton';

EmptyListButton.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
};

export default EmptyListButton;
