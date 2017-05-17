import React, { PropTypes } from 'react';
import Movie from 'models/Movie';
import MovieCardPoster from 'components/MovieCard/Poster';
import MovieCardInfo from 'components/MovieCard/Info';
import './styles.css';

const FetchedMovieCard = ({
  movie,
  isSaved,
  onAddMovie,
  onRemoveMovie,
}) => {
  const isSavedClass = isSaved
    ? 'is-saved'
    : 'is-not-saved';

  return (
    <li>
      <div className="fetched-movie-card">
        <MovieCardPoster
          poster={movie.get('poster')}
          alt={`${movie.get('title')} Poster`}
        />
        <div className="fetched-movie-card-description">
          <MovieCardInfo
            title={movie.get('title')}
            year={movie.get('year')}
            type={movie.get('type')}
          />
          <div className="fetched-movie-card-actions">
            <button
              className={`fetched-movie-card-action ${isSavedClass}`}
              onClick={() => {
                if (!isSaved) {
                  onAddMovie();
                } else {
                  onRemoveMovie();
                }
              }}
            >
              <span className="fetched-movie-card-action-label" />
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
  isSaved: PropTypes.bool.isRequired,
  onAddMovie: PropTypes.func.isRequired,
  onRemoveMovie: PropTypes.func.isRequired,
};

export default FetchedMovieCard;
