import React, { PropTypes } from 'react';
import Movie from 'models/Movie';

const MovieCard = ({
  movie,
  ontoggleMovieWatched,
  onRemoveMovie,
}) => (
  <li>
    <div>
      <button
        onClick={ontoggleMovieWatched}
      >
        O
      </button>
      <div style={{ opacity: movie.get('watched') ? '0.5' : '1' }}>
        <p>
          Title: {movie.get('title')}
        </p>
        <img src={movie.get('poster')} alt={`${movie.title} Poster`} />
      </div>
      <button
        onClick={onRemoveMovie}
      >
        X
      </button>
    </div>
  </li>
);

MovieCard.displayName = 'MovieCard';

MovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
  ontoggleMovieWatched: React.PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};



export default MovieCard;
