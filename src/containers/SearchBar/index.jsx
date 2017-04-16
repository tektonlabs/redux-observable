import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateSearchValue, fetchMovies } from 'modules/SearchResults';

const SearchBar = ({ value, updateSearchValue, fetchMovies }) => {
  const onInputChange = (e) => {
    updateSearchValue(e.target.value);
  };

  const onInputKeyUp = () => {
    fetchMovies(value);
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

const mapStateToProps = (state) => ({
  value: state.getIn(['searchResults', 'searchValue']),
});

const mapDispatchToProps = {
  updateSearchValue,
  fetchMovies,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);
