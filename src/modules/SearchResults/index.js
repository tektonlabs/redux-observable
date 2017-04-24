import { Record } from 'immutable';
import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import { createSelector } from 'reselect';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import omdbService from 'services/omdb';
import switchcase from 'utils/switchcase';

// Initial State
const InitialState = new Record({
  searchValue: '',
  movies: new MovieMap(),
  phase: 'init',
});

// Selectors
const rootSelector = state => state.get('searchResults');
const getSearchValue = createSelector(rootSelector, state => state.get('searchValue'));
const getMovies = createSelector(rootSelector, state => state.get('movies'));
const getPhase = createSelector(rootSelector, state => state.get('phase'));

export const selector = {
  getSearchValue,
  getMovies,
  getPhase,
};

// Actions
const UPDATE_SEARCH_VALUE = 'redux-observable/search-results/UPDATE_SEARCH_VALUE';
const CLEAR_MOVIES = 'redux-observable/search-results/CLEAR_MOVIES';
const FETCH_MOVIES = 'redux-observable/search-results/FETCH_MOVIES';
const FETCH_MOVIES_SUCCESS = 'redux-observable/search-results/FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_CANCEL = 'redux-observable/search-results/FETCH_MOVIES_CANCEL';
const FETCH_MOVIES_CANCEL_DONE = 'redux-observable/search-results/FETCH_MOVIES_CANCEL_DONE';
const FETCH_MOVIES_ERROR = 'redux-observable/search-results/FETCH_MOVIES_ERROR';

// Action Creators
export const updateSearchValue = (value) => ({
  type: UPDATE_SEARCH_VALUE,
  value,
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES,
});

export const fetchMovies = (searchValue) => ({
  type: FETCH_MOVIES,
  searchValue,
});

export const fetchMoviesSuccess = (movies) => ({
  type: FETCH_MOVIES_SUCCESS,
  movies,
});

export const fetchMoviesCancel = () => ({
  type: FETCH_MOVIES_CANCEL,
});

export const fetchMoviesCancelDone = () => ({
  type: FETCH_MOVIES_CANCEL_DONE,
});

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

// Epics
const fetchMoviesEpic = (action$, store) => (
  action$.ofType(FETCH_MOVIES)
    .debounceTime(500)
    .switchMap(action =>
      getPhase(store.getState()) === 'cancel'
        ? Observable.of(fetchMoviesCancelDone())
        : Observable.from(omdbService.searchMovies(action.searchValue))
            .map(movies => fetchMoviesSuccess(movies))
            .takeUntil(action$.ofType(FETCH_MOVIES_CANCEL))
            .catch(error => Observable.of(
              fetchMoviesError(error)
            ))
    )
);

const fetchMoviesCancelEpic = action$ => (
  action$.ofType(FETCH_MOVIES_CANCEL)
    .debounceTime(500)
    .mapTo(fetchMoviesCancelDone())
);

export const epic = combineEpics(
  fetchMoviesEpic,
  fetchMoviesCancelEpic
);

// Reducer Functions
const onFetchMoviesSuccess = (state, movies) => {
  const newMovies = {};

  movies.forEach((movie) => {
    newMovies[movie.id] = new Movie(movie);
  });

  return (
    state
      .update('movies', movies => movies.clear().merge(newMovies))
      .set('phase', 'success')
  );
};

// Reducer
export default function reducer(state = new InitialState(), action) {
  const cases = {};
  cases[UPDATE_SEARCH_VALUE] = () => state.set('searchValue', action.value);
  cases[CLEAR_MOVIES] = () => state.set('movies', new MovieMap());
  cases[FETCH_MOVIES] = () => state.set('phase', 'loading');
  cases[FETCH_MOVIES_SUCCESS] = () => !action.movies ? state : onFetchMoviesSuccess(state, action.movies);
  cases[FETCH_MOVIES_CANCEL] = () => state.set('phase', 'cancel');
  cases[FETCH_MOVIES_CANCEL_DONE] = () => state.set('phase', 'init');
  cases[FETCH_MOVIES_ERROR] = () => (
    state
      .set('movies', new MovieMap())
      .set('phase', 'error')
  );

  return switchcase(cases)(state)(action.type);
}
