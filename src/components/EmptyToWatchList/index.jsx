import React, { PropTypes } from 'react';
import EmptyListMessage from 'components/EmptyListMessage';
import './styles.css';

const EmptyToWatchList = ({ onGoExplore }) => (
  <EmptyListMessage
    title="No saved movies"
    message="Go and find movies you'd like to watch later!"
  >
    <button
      className="empty-watch-list-explore-button"
      onClick={onGoExplore}
    >
      <span className="empty-watch-list-explore-icon"></span>
      Explore
    </button>
  </EmptyListMessage>
);

EmptyToWatchList.displayName = 'EmptyToWatchList';

EmptyToWatchList.propTypes = {
  onGoExplore: PropTypes.func.isRequired,
};

export default EmptyToWatchList;
