import React, { PropTypes } from 'react';
import Movie from 'models/Movie';

const FetchedMovieCard = ({
  movie,
  onAddMovie,
}) => (
  <li>
    <button
      onClick={onAddMovie}
    >
      O
    </button>
  </li>
);

FetchedMovieCard.displayName = 'FetchedMovieCard';

FetchedMovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
  onAddMovie: PropTypes.func.isRequired,
};

export default FetchedMovieCard;
