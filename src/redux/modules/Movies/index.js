import Immutable from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import switchcase from 'utils/switchcase';

// Action
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

// Initial State
const initialState = new MovieMap();

// Reducer Functions
const reducerAdd = (state, movie) => (
  state.set(movie.id, new Movie(movie))
);

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[ADD] = () => !action.movie ? state : reducerAdd(state, action.movie);
  cases[REMOVE] = () => state.remove(action.movieId);

  return switchcase(cases)(state)(action.type);
}
