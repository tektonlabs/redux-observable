import switchcase from 'utils/switchcase';

// Constants
const EXPLORE = 'EXPLORE';
const SAVED = 'SAVED';

export const constants = {
  EXPLORE,
  SAVED,
};

// Initial State
const initialState = SAVED;

// Selectors
const getActiveTab = state => state.get('activeTab');

export const selector = {
  getActiveTab,
};

// Actions
const SET = 'redux-observable/active-tab/SET';

// Action Creators
export const setActiveTab = (tab) => ({
  type: SET,
  tab,
});

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[SET] = () => { console.log('action: ', action); return action.tab || state; };

  return switchcase(cases)(state)(action.type);
}
