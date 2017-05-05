import reducer, {
  constants,
  setActiveTab,
} from './index';

describe('ActiveTab reducer', () => {
  it('sets the active to a new value', () => {
    const state = constants.EXPLORE;
    const action = setActiveTab(constants.SAVED);
    const nextState = constants.SAVED;

    expect(reducer(state, action)).toEqual(nextState);
  });
});
