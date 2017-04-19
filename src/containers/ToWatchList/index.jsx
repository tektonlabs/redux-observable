import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';
import {
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
  selector,
} from 'modules/Movies';
import MovieCard from 'components/MovieCard';

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
            <MovieCard
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

const mapStateToProps = (state) => ({
  movies: selector.getMovies(state),
});

const mapDispatchToProps = {
  toggleMovieWatched,
  removeMovie,
  clearWatchedMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToWatchList);
