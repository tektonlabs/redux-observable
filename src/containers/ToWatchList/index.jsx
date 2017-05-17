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
import EmptyListButton from 'components/EmptyListButton';
import EmptyListMessage from 'components/EmptyListMessage';

const ToWatchList = ({
  filteredMovies,
  savedMovies,
  activeFilter,
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  push,
  go,
}) => {
  const watchedEmpty = (
    activeFilter === constants.WATCHED &&
    !savedMovies.isEmpty() &&
    filteredMovies.isEmpty()
  );
  const allMoviesWatched = (
    activeFilter === constants.TO_WATCH &&
    !savedMovies.isEmpty() &&
    filteredMovies.isEmpty()
  );
  const savedEmpty = savedMovies.isEmpty();

  return (
    watchedEmpty
    ? <EmptyListMessage
        title="No movies in here"
        message="Go and watch some of your saved movies!"
      />
    : allMoviesWatched
    ? <EmptyListButton
        title="You watched all your movies"
        message="Go and find new movies you'd like to watch!"
        buttonText="Explore"
        onButtonClick={() => {
          push('/explore');
          go();
        }}
      />
    : savedEmpty
    ? <EmptyListButton
        title="No saved movies"
        message="Go and find movies you'd like to watch!"
        buttonText="Explore"
        onButtonClick={() => {
          push('/explore');
          go();
        }}
      />
    : <MovieList>
        {filteredMovies.valueSeq().map(movie => (
          <ListMovieCard
            key={movie.get('id')}
            movie={movie}
            ontoggleMovieWatched={() => { toggleMovieWatched(movie.get('id')); }}
            onRemoveMovie={() => { removeMovie(movie.get('id')); }}
          />
        ))}
      </MovieList>
  );
};

ToWatchList.displayName = 'ToWatchList';

ToWatchList.propTypes = {
  filteredMovies: PropTypes.instanceOf(MovieMap).isRequired,
  savedMovies: PropTypes.instanceOf(MovieMap).isRequired,
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
  filteredMovies: getMoviesByFilter(stateProps),
  savedMovies: stateProps.movies,
  activeFilter: stateProps.activeFilter,
  ...dispatchProps,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps
)(ToWatchList);
