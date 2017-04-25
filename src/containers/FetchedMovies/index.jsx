import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';
import { selector } from 'modules/SearchResults';
import { addMovie } from 'modules/Movies';
import FetchedMovieCard from 'components/FetchedMovieCard';

const FetchedMovies = ({
  movies,
  addMovie,
}) => (
  <div>
    Search Results:
    {movies.isEmpty() ? <p>No results found</p> : (
      <ul>
        {movies.valueSeq().map(movie => (
          <FetchedMovieCard
            key={movie.get('id')}
            movie={movie}
            onAddMovie={() => { addMovie(movie); }}
          />
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
