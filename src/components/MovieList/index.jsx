import React, { PropTypes } from 'react';
import './style.css';

const MovieList = ({ children }) => (
  <ul className="movie-list">
    {children}
  </ul>
);

MovieList.displayName = 'MovieList';

MovieList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MovieList;
