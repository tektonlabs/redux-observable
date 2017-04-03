import Immutable from 'immutable';
import Movie from 'models/Movie';
import MovieMap from 'models/MovieMap';
import reducer, {
  updateSearchResults,
  clearSearchResults,
} from './index';

describe('SearchList module', () => {
  it('adds movies to the search results', () => {
    const state = new MovieMap();

    const action = updateSearchResults([
      {
        id: '1',
        title: 'Test Movie',
      },
      {
        id: '2',
        title: 'Test Movie',
      },
      {
        id: '3',
        title: 'Test Movie',
      },
      {
        id: '4',
        title: 'Test Movie',
      },
      {
        id: '5',
        title: 'Test Movie',
      },
    ]);

    const nextState = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
      }),
      '2': new Movie({
        id: '2',
        title: 'Test Movie',
      }),
      '3': new Movie({
        id: '3',
        title: 'Test Movie',
      }),
      '4': new Movie({
        id: '4',
        title: 'Test Movie',
      }),
      '5': new Movie({
        id: '5',
        title: 'Test Movie',
      }),
    });

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('clears all from the search results', () => {
    const state = new MovieMap({
      '1': new Movie({
        id: '1',
        title: 'Test Movie',
      }),
      '2': new Movie({
        id: '2',
        title: 'Test Movie',
      }),
      '3': new Movie({
        id: '3',
        title: 'Test Movie',
      }),
      '4': new Movie({
        id: '4',
        title: 'Test Movie',
      }),
      '5': new Movie({
        id: '5',
        title: 'Test Movie',
      }),
    });

    const action = clearSearchResults();

    const newState = new MovieMap();

    expect(reducer(state, action)).toEqual(newState);
  });
});
