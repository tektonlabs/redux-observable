import { Record } from 'immutable';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import omdbService from 'services/omdb';
import switchcase from 'utils/switchcase';

// Actions
const UPDATE_SEARCH_VALUE = 'redux-observable/search-results/UPDATE_SEARCH_VALUE';
const UPDATE = 'redux-observable/search-results/UPDATE';
const CLEAR_ALL = 'redux-observable/search-results/CLEAR_ALL';
const FETCH_MOVIES = 'redux-observable/search-results/FETCH_MOVIES';
const FETCH_SUCCESS = 'redux-observable/search-results/FETCH_SUCCESS';
const FETCH_ERROR = 'redux-observable/search-results/FETCH_ERROR';

export const updateSearchValue = (value) => ({
  type: UPDATE_SEARCH_VALUE,
  value,
});

export const updateSearchResults = (movies) => ({
  type: UPDATE,
  movies,
});

export const clearSearchResults = () => ({
  type: CLEAR_ALL,
});

// Action Creators
export const fetchMovies = (searchValue) => ({
  type: FETCH_MOVIES,
  searchValue,
});

export const fetchSuccess = (movies) => ({
  type: FETCH_SUCCESS,
  movies,
});

export const fetchError = (error) => ({
  type: FETCH_ERROR,
  error,
});

const fetchMoviesEpic = action$ => (
  action$.ofType(FETCH_MOVIES)
    .debounceTime(500)
    .switchMap(action => omdbService.getMoviesTest(action.searchValue))
    .map(movies => fetchSuccess(movies))
    .catch(error => Observable.of(
      fetchError(error)
    ))
);

export const searchResultsEpic = combineEpics(
  fetchMoviesEpic
);

// Initial State
const InitialState = new Record({
  searchValue: '',
  movies: new MovieMap(),
  phase: 'init',
});

// Reducer Functions
const onFetchSuccess = (state, movies) => {
  const newMovies = {};

  console.log(movies);

  movies.forEach((movie) => {
    newMovies[movie.id] = new Movie(movie);
  });

  return state
    .update('movies', movies => movies.clear().merge(newMovies))
    .set('phase', 'success');
};

// Reducer
export default function reducer(state = new InitialState(), action) {
  const cases = {};
  cases[UPDATE_SEARCH_VALUE] = () => state.set('searchValue', action.value);
  cases[UPDATE] = () => !action.movies ? state : onFetchSuccess(state, action.movies);
  cases[CLEAR_ALL] = () => state.clear();
  cases[FETCH_MOVIES] = () => state.set('phase', 'loading');
  cases[FETCH_SUCCESS] = () => !action.movies ? state : onFetchSuccess(state, action.movies);
  cases[FETCH_ERROR] = () => { console.log('error: ', action.error); return state.set('phase', 'error'); };

  return switchcase(cases)(state)(action.type);
}
