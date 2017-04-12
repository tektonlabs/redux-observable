import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { combineReducers } from 'redux-immutable';
import reducers from './store/reducers';
import Routes from './Routes';

const store = createStore(combineReducers(reducers));

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
