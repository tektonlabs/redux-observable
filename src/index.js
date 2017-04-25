import 'rxjs/Rx';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerReducer, routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import reducers from './store/reducers';
import { epic as filterEpic } from 'modules/Filter';
import { epic as searchResultsEpic } from 'modules/SearchResults';
import Routes from './Routes';

const history = createHistory()

const routerMiddleware = createRouterMiddleware(history)
const epicMiddleware = createEpicMiddleware(combineEpics(
  filterEpic,
  searchResultsEpic
));

const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer,
  }),
  applyMiddleware(epicMiddleware, routerMiddleware)
);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
