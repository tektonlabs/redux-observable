import React, { PropTypes } from 'react';
import Movie from 'models/Movie';
import MovieCardPoster from 'components/MovieCard/Poster';
import MovieCardInfo from 'components/MovieCard/Info';
import './styles.css';

const FetchedMovieCard = ({
  movie,
  ontoggleMovieWatched,
  onRemoveMovie,
}) => {
  const isWatchedClass = movie.get('watched')
    ? 'is-watched'
    : 'is-not-watched';

  return (
    <li>
      <div className="list-movie-card">
        <MovieCardPoster
          poster={movie.get('poster')}
          alt={`${movie.get('title')} Poster`}
        />
        <div className="list-movie-card-description">
          <MovieCardInfo
            title={movie.get('title')}
            year={movie.get('year')}
            type={movie.get('type')}
          />
          <div className="list-movie-card-actions">
            <button
              className={`list-movie-card-action ${isWatchedClass}`}
              onClick={ontoggleMovieWatched}
            >
              <span className="list-movie-card-action-icon" />
              <span className="list-movie-card-action-label" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

FetchedMovieCard.displayName = 'FetchedMovieCard';

FetchedMovieCard.propTypes = {
  movie: PropTypes.instanceOf(Movie).isRequired,
  ontoggleMovieWatched: PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default FetchedMovieCard;
