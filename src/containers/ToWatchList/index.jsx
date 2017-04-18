import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';
import {
  removeMovie,
  selector,
} from 'modules/Movies';

const ToWatchList = ({ movies, removeMovie }) => (
  <div>
    To Watch Movie List:
    {movies.isEmpty() ? <p>No movies added to your list yet! Add some!</p> : (
      <ul>
        {movies.valueSeq().map(movie => (
          <li
            key={movie.get('id')}
            onClick={() => removeMovie(movie.get('id'))}
          >
            <div>
              <p>
                Title: {movie.getTitle()}
              </p>
              <img src={movie.get('poster')} alt={`${movie.title} Poster`} />
            </div>
          </li>
        ))}
      </ul>
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
  removeMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ToWatchList);
