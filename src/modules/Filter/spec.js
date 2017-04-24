import reducer, {
  constants,
  setFilter,
} from './index';

describe('Filter reducer', () => {
  it('sets the active filter according to the url', () => {
    const state = constants.ALL;
    const action = setFilter('/watched')
    const nextState = constants.WATCHED

    expect(reducer(state, action)).toEqual(nextState);
  });
});
