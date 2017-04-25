import React, { PropTypes } from 'react';
import Movie from 'models/Movie';

const MovieCard = ({
  movie,
}) => (
  <div style={{ opacity: movie.get('watched') ? '0.5' : '1' }}>
    <p>
      Title: {movie.get('title')}
    </p>
    <img src={movie.get('poster')} alt={`${movie.title} Poster`} />
  </div>
);

MovieCard.displayName = 'MovieCard';

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
};



export default MovieCard;
