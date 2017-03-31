import Immutable from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import reducer, {
  addMovie,
  removeMovie,
  toggleMovieWatched,
  clearWatchedMovies,
} from './index';

describe('Movies reducer', () => {
  it('adds a movie to the list', () => {
    const state = new MovieMap();

    const action = addMovie({
      id: '1',
      title: 'Test Movie',
    });

    let nextState = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
      }),
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('removes a movie from the list', () => {
    const state = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
      }),
    });

    const action = removeMovie('1');

    const nextState = new MovieMap();

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('marks a movie as watched', () => {
    const state = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
      }),
    });

    const action = toggleMovieWatched('1');

    const nextState = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
        watched: true,
      }),
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('marks a movie as not watched', () => {
    const state = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
        watched: true,
      }),
    });

    const action = toggleMovieWatched('1');

    const nextState = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
        watched: false,
      }),
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('clears the watched movies', () => {
    const state = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
        watched: true,
      }),
      '2': new Movie({
        id: '2',
        title: 'Test Movie',
        watched: false,
      }),
      '3': new Movie({
        id: '3',
        title: 'Test Movie',
        watched: true,
      }),
    });

    const action = clearWatchedMovies();

    const newState = new MovieMap({
      '2': new Movie({
        id: '2',
        title: 'Test Movie',
        watched: false,
      }),
    });

    expect(reducer(state, action)).toEqual(newState);
  });
});
