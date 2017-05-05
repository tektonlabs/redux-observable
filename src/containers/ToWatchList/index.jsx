import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
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
import ListMovieCard from 'components/ListMovieCard';

const ToWatchList = ({
  movies,
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
}) => (
  <div>
    To Watch Movie List:
    {movies.isEmpty() ? <p>No movies added to your list yet! Add some!</p> : (
      <div>
        <ul>
          {movies.valueSeq().map(movie => (
            <ListMovieCard
              key={movie.get('id')}
              movie={movie}
              ontoggleMovieWatched={() => { toggleMovieWatched(movie.get('id')); }}
              onRemoveMovie={() => { removeMovie(movie.get('id')); }}
            />
          ))}
        </ul>
        <button
          onClick={() => { clearWatchedMovies(); }}
        >
          Clear Watched
        </button>
      </div>
    )}
  </div>
);

ToWatchList.displayName = 'ToWatchList';

ToWatchList.propTypes = {
  movies: PropTypes.instanceOf(MovieMap).isRequired,
};

const mapStateToProps = state => ({
  movies: moviesSelector.getMovies(state),
  activeFilter: activeFilterSelector.getActiveFilter(state),
});

const mapDispatchToProps = {
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
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
