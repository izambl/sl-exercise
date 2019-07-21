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

export default store;
