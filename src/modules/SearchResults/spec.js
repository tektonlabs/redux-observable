import { Record } from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import reducer, {
  constants,
  updateSearchValue,
  clearMovies,
  fetchMovies,
  fetchMoviesSuccess,
  fetchMoviesCancel,
  fetchMoviesCancelDone,
  fetchMoviesError,
} from './index';

describe('SearchResults reducer', () => {
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

  it('clears all movies', () => {
    const StateRecord = new Record({
      movies: new MovieMap(),
    });

    const state = new StateRecord({
      movies: new MovieMap({
        '1': new Movie({
          id: '1',
          title: 'Test Movie',
        }),
        '2': new Movie({
          id: '2',
          title: 'Test Movie',
        })
      }),
    })

    const action = clearMovies();

    const nextState = new StateRecord();

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('fetches movies setting the phase to "LOADING"', () => {
    const StateRecord = new Record({
      phase: constants.INIT,
    });

    const state = new StateRecord();

    const action = fetchMovies();

    const nextState = new StateRecord({
      phase: constants.LOADING,
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles successfully fetching movies', () => {
    const StateRecord = new Record({
      movies: new MovieMap(),
      phase: constants.LOADING,
    });

    const state = new StateRecord();

    const action = fetchMoviesSuccess([
      {
        id: '1',
        title: 'Test Movie',
      },
      {
        id: '2',
        title: 'Test Movie',
      },
    ]);

    const nextState = new StateRecord({
      movies: new MovieMap({
        '1': new Movie({
          id: '1',
          title: 'Test Movie',
        }),
        '2': new Movie({
          id: '2',
          title: 'Test Movie',
        }),
      }),
      phase: constants.SUCCESS,
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles fetching movies cancellation', () => {
    const StateRecord = new Record({
      phase: constants.LOADING,
    });

    const state = new StateRecord();

    const action = fetchMoviesCancel();

    const nextState = new StateRecord({
      phase: constants.CANCEL,
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles changing the cancellation phase to "init" when it\'s done', () => {
    const StateRecord = new Record({
      phase: constants.CANCEL,
    });

    const state = new StateRecord();

    const action = fetchMoviesCancelDone();

    const nextState = new StateRecord({
      phase: constants.INIT,
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('handles fetching movies errors', () => {
    const StateRecord = new Record({
      movies: new MovieMap(),
      phase: constants.CANCEL,
      error: '',
    });

    const state = new StateRecord({
      movies: new MovieMap({
        '1': {
          id: '1',
          title: 'Test Movie',
        }
      }),
      phase: constants.LOADING,
    });

    const action = fetchMoviesError('There was an error!');

    const nextState = new StateRecord({
      movies: new MovieMap(),
      phase: constants.ERROR,
      error: 'There was an error!',
    });

    expect(reducer(state, action)).toEqual(nextState);
  });
});
