import { combineEpics } from 'redux-observable';
import { CALL_HISTORY_METHOD } from 'react-router-redux';
import switchcase from 'utils/switchcase';

// Constants
const ALL = 'ALL';
const TO_WATCH = 'TO_WATCH';
const WATCHED = 'WATCHED';

export const constants = {
  ALL,
  TO_WATCH,
  WATCHED,
};

// Initial State
const initialState = ALL;

// Selectors
const getActiveFilter = state => state.get('activeFilter');

export const selector = {
  getActiveFilter,
};

// Actions
const SET = 'redux-observable/active-filter/SET';

// Action Creators
export const setActiveFilter = (filter) => ({
  type: SET,
  filter,
});

// Epics
const setActiveFilterEpic = (action$, store) => (
  action$.ofType(CALL_HISTORY_METHOD)
    .map(action =>
      setActiveFilter(action.payload.args[0])
    )
);

export const epic = combineEpics(
  setActiveFilterEpic,
);

// Reducer Functions
const onSetActiveFilter = (state, filter) => {
  const filterMap = {
    '/': ALL,
    '/to-watch': TO_WATCH,
    '/watched': WATCHED,
  };

  const filterValue = filterMap[filter];

  return filterValue
    ? filterValue
    : state;
};

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[SET] = () => onSetActiveFilter(state, action.filter);

  return switchcase(cases)(state)(action.type);
}
