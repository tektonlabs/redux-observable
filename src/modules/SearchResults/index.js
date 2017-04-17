import { Record } from 'immutable';
import { combineEpics } from 'redux-observable';
import { Observable } from 'rxjs/Observable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import omdbService from 'services/omdb';
import switchcase from 'utils/switchcase';

// Actions
const UPDATE_SEARCH_VALUE = 'redux-observable/search-results/UPDATE_SEARCH_VALUE';
const CLEAR_MOVIES = 'redux-observable/search-results/CLEAR_MOVIES';
const FETCH_MOVIES = 'redux-observable/search-results/FETCH_MOVIES';
const FETCH_MOVIES_SUCCESS = 'redux-observable/search-results/FETCH_MOVIES_SUCCESS';
const FETCH_MOVIES_CANCEL = 'redux-observable/search-results/FETCH_MOVIES_CANCEL';
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

export const fetchMoviesError = (error) => ({
  type: FETCH_MOVIES_ERROR,
  error,
});

const fetchMoviesEpic = action$ => (
  action$.ofType(FETCH_MOVIES)
    .debounceTime(500)
    .switchMap(action =>
      Observable.from(omdbService.searchMovies(action.searchValue))
        .map(movies => fetchMoviesSuccess(movies))
        .takeUntil(action$.ofType(FETCH_MOVIES_CANCEL))
        .catch(error => Observable.of(
          fetchMoviesError(error)
        ))
    )
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
  cases[FETCH_MOVIES_SUCCESS] = () => !action.movies ? state : onFetchSuccess(state, action.movies);
  cases[FETCH_MOVIES_CANCEL] = () => {
    console.log('cancel');
    return state.set('phase', 'init');
  };
  cases[FETCH_MOVIES_ERROR] = () => (
    state
      .set('movies', new MovieMap())
      .set('phase', 'error')
  );

  return switchcase(cases)(state)(action.type);
}
