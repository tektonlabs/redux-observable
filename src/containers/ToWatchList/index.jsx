import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { push, go } from 'react-router-redux';
import { createSelector } from 'reselect';
import MovieMap from 'models/MovieMap';
import {
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  selector as moviesSelector,
} from 'modules/Movies';
import {
  constants,
  selector as activeFilterSelector,
} from 'modules/ActiveFilter';
import MovieList from 'components/MovieList';
import ListMovieCard from 'components/ListMovieCard';

const ToWatchList = ({
  movies,
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  push,
  go,
}) => (
  <div>
    {movies.isEmpty()
      ? <div className="not-found-container">
          <span className="not-found-title">No saved movies</span>
          <span className="not-found-message">Go and find movies you'd like to watch later!</span>
          <button
            className="search-button"
            onClick={() => {
              push('/explore');
              go();
            }}
          >
            <span className="search-icon"></span>
            Explore
          </button>
        </div>
      : <MovieList>
          {movies.valueSeq().map(movie => (
            <ListMovieCard
              key={movie.get('id')}
              movie={movie}
              ontoggleMovieWatched={() => { toggleMovieWatched(movie.get('id')); }}
              onRemoveMovie={() => { removeMovie(movie.get('id')); }}
            />
          ))}
        </MovieList>
    }
  </div>
);

ToWatchList.displayName = 'ToWatchList';

ToWatchList.propTypes = {
  movies: PropTypes.instanceOf(MovieMap).isRequired,
  toggleMovieWatched: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
  clearWatchedMovies: PropTypes.func.isRequired,
  push: PropTypes.func.isRequired,
  go: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  movies: moviesSelector.getMovies(state),
  activeFilter: activeFilterSelector.getActiveFilter(state),
});

const mapDispatchToProps = {
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  push,
  go,
};

const getMoviesByFilter = createSelector(
  props => props.movies,
  props => props.activeFilter,
  (movies, activeFilter) => (
    activeFilter === constants.ALL ? movies :
    activeFilter === constants.TO_WATCH ? movies.filter(movie => !movie.get('watched')) :
    movies.filter(movie => movie.get('watched'))
  )
);

const mergeProps = (stateProps, dispatchProps) => ({
  movies: getMoviesByFilter(stateProps),
  ...dispatchProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ToWatchList);
