import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import MovieMap from 'models/MovieMap';
import { selector as searchResultsSelector } from 'modules/SearchResults';
import { addMovie, removeMovie, selector as moviesSelector } from 'modules/Movies';
import MovieList from 'components/MovieList';
import FetchedMovieCard from 'components/FetchedMovieCard';
import EmptyResults from 'components/EmptyResults';

const FetchedMovies = ({
  fetchedMovies,
  savedMovies,
  addMovie,
  removeMovie,
}) => (
  <div>
    {fetchedMovies.isEmpty() ? <EmptyResults /> : (
      <MovieList>
        {fetchedMovies.valueSeq().map(movie => (
          <FetchedMovieCard
            key={movie.get('id')}
            movie={movie}
            isSaved={savedMovies.has(movie.get('id'))}
            onAddMovie={() => { addMovie(movie); }}
            onRemoveMovie={() => { removeMovie(movie.get('id')); }}
          />
        ))}
      </MovieList>
    )}
  </div>
);

FetchedMovies.displayName = 'FetchedMovies';

FetchedMovies.propTypes = {
  fetchedMovies: PropTypes.instanceOf(MovieMap).isRequired,
  savedMovies: PropTypes.instanceOf(MovieMap).isRequired,
  addMovie: PropTypes.func.isRequired,
  removeMovie: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  fetchedMovies: searchResultsSelector.getMovies(state),
  savedMovies: moviesSelector.getMovies(state),
});

const mapDispatchToProps = {
  addMovie,
  removeMovie,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FetchedMovies);
