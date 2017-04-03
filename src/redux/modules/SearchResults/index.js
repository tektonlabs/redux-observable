import Immutable from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import switchcase from 'utils/switchcase';

// Actions
const UPDATE = 'redux-observable/search-results/UPDATE';
const CLEAR_ALL = 'redux-observable/search-results/CLEAR_ALL';

// Action Creators
export const updateSearchResults = (movies) => ({
  type: UPDATE,
  movies,
});

export const clearSearchResults = () => ({
  type: CLEAR_ALL,
});

// Initial State
const initialState = new MovieMap();

// Reducer Functions
const reducerUpdate = (state, movies) => {
  const newMovies = {};

  movies.forEach((movie) => {
    newMovies[movie.id] = new Movie(movie);
  });

  return state.clear().merge(newMovies);
};

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[UPDATE] = () => !action.movies ? state : reducerUpdate(state, action.movies);
  cases[CLEAR_ALL] = () => state.clear();

  return switchcase(cases)(state)(action.type);
}
