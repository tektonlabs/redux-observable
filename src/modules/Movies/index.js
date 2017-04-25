import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import switchcase from 'utils/switchcase';

// Initial State
const initialState = new MovieMap();

// Selectors
const getMovies = state => state.get('movies');

export const selector = {
  getMovies,
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
const onAdd = (state, movie) => (
  state.has(movie.id)
    ? state
    : state.set(movie.id, new Movie(movie))
);

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[ADD] = () => !action.movie ? state : onAdd(state, action.movie);
  cases[REMOVE] = () => state.delete(action.movieId);
  cases[TOGGLE_WATCHED] = () => state.update(action.movieId, movie => movie.set('watched', !movie.get('watched')));
  cases[CLEAR_WATCHED] = () => state.filter(movie => !movie.get('watched'));

  return switchcase(cases)(state)(action.type);
}
