import 'rxjs/Rx';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware, combineEpics } from 'redux-observable';
import { combineReducers } from 'redux-immutable';
import reducers from './store/reducers';
import { searchResultsEpic } from 'modules/SearchResults';
import Routes from './Routes';

const epicMiddleware = createEpicMiddleware(combineEpics(
  searchResultsEpic
));

const store = createStore(
  combineReducers(reducers),
  applyMiddleware(epicMiddleware)
);

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
