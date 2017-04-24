import { combineEpics } from 'redux-observable';
import { createSelector } from 'reselect';
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
const getFilter = state => state.get('filter');

export const selector = {
  getFilter,
};

// Actions
const SET = 'redux-observable/filter/SET';

// Action Creators
export const setFilter = (filter) => ({
  type: SET,
  filter,
});

// Epics
const setFilterEpic = (action$, store) => (
  action$.ofType(CALL_HISTORY_METHOD)
    .map(action =>
      setFilter(action.payload.args[0])
    )
);

export const epic = combineEpics(
  setFilterEpic,
);

// Reducer Functions
const onSetFilter = (state, filter) => {
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
  cases[SET] = () => onSetFilter(state, action.filter);

  return switchcase(cases)(state)(action.type);
}
