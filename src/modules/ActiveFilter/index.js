import { combineEpics } from 'redux-observable';
import { CALL_HISTORY_METHOD, LOCATION_CHANGE, push } from 'react-router-redux';
import switchcase from 'utils/switchcase';

// Constants
const ALL = 'ALL';
const TO_WATCH = 'TO_WATCH';
const WATCHED = 'WATCHED';

const filtersMap = {};
filtersMap[ALL] = '/saved/all';
filtersMap[TO_WATCH] = '/saved/to-watch';
filtersMap[WATCHED] = '/saved/watched';

const routesMap = {
  '/saved/all': ALL,
  '/saved/to-watch': TO_WATCH,
  '/saved/watched': WATCHED,
};

export const constants = {
  ALL,
  TO_WATCH,
  WATCHED,
  filtersMap,
  routesMap
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
      setActiveFilter(routesMap[action.payload.args[0]])
    )
);

const matchRouteWithFilter = (action$, store) => (
  action$.ofType(LOCATION_CHANGE)
    .filter(action => action.payload.pathname === '/saved')
    .map(action =>
      push(filtersMap[store.getState().get('activeFilter')])
    )
);

export const epic = combineEpics(
  setActiveFilterEpic,
  matchRouteWithFilter
);

// Reducer
export default function reducer(state = initialState, action) {
  const cases = {};
  cases[SET] = () => action.filter || state;

  return switchcase(cases)(state)(action.type);
}
