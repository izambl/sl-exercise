import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers';
import initialState from './initialState';

const middleWare = [
  thunkMiddleware,
];

const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(...middleWare),
);

if (process.env.MODE === 'development') {
  // In development mode exposes store to global object to facilitate debugging
  window.store = store;
}

export default store;
