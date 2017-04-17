import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';

const FetchedMovies = ({
  movies,
}) => (
  <div>
    Search Results:
    {movies.isEmpty() ? <p>No results found</p> : (
      <ul>
        {movies.valueSeq().map(movie => (
          <li key={movie.get('id')}>
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

FetchedMovies.displayName = 'FetchedMovies';

FetchedMovies.propTypes = {
  movies: PropTypes.instanceOf(MovieMap).isRequired,
};

const mapStateToProps = (state) => ({
  movies: state.getIn(['searchResults', 'movies']),
});

export default connect(
  mapStateToProps
)(FetchedMovies);
