import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';
import { selector } from 'modules/SearchResults';
import { addMovie } from 'modules/Movies';

const FetchedMovies = ({
  movies,
  addMovie,
}) => (
  <div>
    Search Results:
    {movies.isEmpty() ? <p>No results found</p> : (
      <ul>
        {movies.valueSeq().map(movie => (
          <li
            key={movie.get('id')}
            onClick={() => addMovie(movie)}
          >
            <div>
              <p>
                Title: {movie.get('title')}
              </p>
              <img src={movie.get('poster')} alt={`${movie.title} Poster`} />
            </div>
          </li>
        ))}
      </ul>
    )}
  </div>
);

FetchedMovies.displayName = 'FetchedMovies';

FetchedMovies.propTypes = {
  movies: PropTypes.instanceOf(MovieMap).isRequired,
};

const mapStateToProps = state => ({
  movies: selector.getMovies(state),
});

const mapDispatchToProps = {
  addMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchedMovies);
