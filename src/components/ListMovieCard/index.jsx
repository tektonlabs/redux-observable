import React, { PropTypes } from 'react';
import Movie from 'models/Movie';
import MovieCard from 'components/MovieCard';

const FetchedMovieCard = ({
  movie,
  ontoggleMovieWatched,
  onRemoveMovie,
}) => (
  <li>
    <button
      onClick={ontoggleMovieWatched}
    >
      O
    </button>
    <MovieCard movie={movie} />
    <button
      onClick={onRemoveMovie}
    >
      X
    </button>
  </li>
);

FetchedMovieCard.displayName = 'FetchedMovieCard';

FetchedMovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
  ontoggleMovieWatched: PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default FetchedMovieCard;