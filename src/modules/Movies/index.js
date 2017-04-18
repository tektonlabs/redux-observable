import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import switchcase from 'utils/switchcase';

// Initial State
const initialState = new MovieMap();

//Selectors
const rootSelector = state => state.get('movies');

export const selector = {
  getMovies: rootSelector,
};

// Actions
const ADD = 'redux-observable/movies/ADD';
const REMOVE = 'redux-observable/movies/REMOVE';
const TOGGLE_WATCHED = 'redux-observable/movies/TOGGLE_WATCHED';
const CLEAR_WATCHED = 'redux-observable/movies/CLEAR_WATCHED';

// Action Creators
export const addMovie = (movie) => ({
  type: ADD,
  movie,
});

export const removeMovie = (movieId) => ({
  type: REMOVE,
  movieId,
});

export const toggleMovieWatched = (movieId) => ({
  type: TOGGLE_WATCHED,
  movieId,
});

export const clearWatchedMovies = () => ({
  type: CLEAR_WATCHED,
});

// Reducer Functions
const reducerAdd = (state, movie) => {
  console.log('adds movie');
  return state.set(movie.id, new Movie(movie))
};

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[ADD] = () => !action.movie ? state : reducerAdd(state, action.movie);
  cases[REMOVE] = () => state.remove(action.movieId);
  cases[TOGGLE_WATCHED] = () => state.update(action.movieId, movie => movie.set('watched', !movie.isWatched()));
  cases[CLEAR_WATCHED] = () => state.filter(movie => !movie.isWatched());

  return switchcase(cases)(state)(action.type);
}
