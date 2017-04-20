import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  updateSearchValue,
  fetchMovies,
  fetchMoviesCancel,
  clearMovies,
  selector,
} from 'modules/SearchResults';

const SearchBar = ({
  value,
  updateSearchValue,
  fetchMovies,
  fetchMoviesCancel,
  clearMovies,
}) => {
  const onInputChange = (e) => {
    updateSearchValue(e.target.value);
  };

  const onInputKeyUp = () => {
    if (value) {
      fetchMovies(value);
    } else {
      fetchMoviesCancel();
      clearMovies();
    }
  };

  return (
    <input type="text" value={value} onChange={onInputChange} onKeyUp={onInputKeyUp} />
  );
};

SearchBar.displayName = 'SearchBar';

SearchBar.propTypes = {
  value: PropTypes.string,
  fetchMovies: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  value: selector.getSearchValue(state),
});

const mapDispatchToProps = {
  updateSearchValue,
  fetchMovies,
  fetchMoviesCancel,
  clearMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
