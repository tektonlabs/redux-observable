import reducer, {
  constants,
  setActiveFilter,
} from './index';

describe('ActiveFilter reducer', () => {
  it('sets the active filter according to the url', () => {
    const state = constants.ALL;
    const action = setActiveFilter('/watched');
    const nextState = constants.WATCHED;

    expect(reducer(state, action)).toEqual(nextState);
  });
});
