import React, { PropTypes } from 'react';
import Movie from 'models/Movie';
import MovieCard from 'components/MovieCard';

const FetchedMovieCard = ({
  movie,
  onAddMovie,
}) => (
  <li>
    <MovieCard movie={movie} />
  </li>
);

FetchedMovieCard.displayName = 'FetchedMovieCard';

FetchedMovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
  onAddMovie: PropTypes.func.isRequired,
};

export default FetchedMovieCard;
