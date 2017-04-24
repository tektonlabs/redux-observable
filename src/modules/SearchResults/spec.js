import { Record } from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import reducer, {
  updateSearchValue,
  clearMovies,
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesCancel,
  fetchMoviesCancelDone,
  fetchMoviesError,
} from './index';

describe('SearchList reducer', () => {
  it('updates the search value', () => {
    const StateRecord = new Record({
      searchValue: '',
    });

    const state = new StateRecord();

    const action = updateSearchValue('search test');

    const nextState = new StateRecord({
      searchValue: 'search test'
    });

    expect(reducer(state, action)).toEqual(nextState);
  });
/*
  it('clears all movies', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('fetches movies setting the phase to "loading"', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles successfully fetching movies', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles successfully fetching movies', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles fetching movies cancellation', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles changing the cancellation phase to "init" when it\'s done', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles fetching movies errors', () => {
    const state =

    const action =

    const nextState =

    expect(reducer(state, action)).toEqual(nextState);
  });*/
});
