import React, { PropTypes } from 'react';
import './styles.css';

const MovieCardInfo = ({ title, year, type }) => (
  <div className="movie-card-info">
    <p className="movie-card-info-title">
      {title} ({year})
    </p>
    <p className="movie-card-info-type">
      Type: {type}
    </p>
  </div>
);

MovieCardInfo.displayName = 'MovieCardInfo';

MovieCardInfo.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieCardInfo;
