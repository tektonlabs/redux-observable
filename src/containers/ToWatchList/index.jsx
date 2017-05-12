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
import EmptyToWatchList from 'components/EmptyToWatchList';
import EmptyListMessage from 'components/EmptyListMessage';

const ToWatchList = ({
  movies,
  allMovies,
  activeFilter,
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  push,
  go,
}) => (
  <div>
    {activeFilter === constants.WATCHED && !allMovies.isEmpty() && movies.isEmpty()
      ? <EmptyListMessage
          title="No movies in here"
          message="Go and watch some of your saved movies!"
        />
      : movies.isEmpty()
        ? <EmptyToWatchList
            onGoExplore={() => {
              push('/explore');
              go();
            }}
          />
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
  allMovies: PropTypes.instanceOf(MovieMap).isRequired,
  activeFilter: PropTypes.string.isRequired,
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
  allMovies: stateProps.movies,
  activeFilter: stateProps.activeFilter,
  ...dispatchProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ToWatchList);
