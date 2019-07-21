import { combineReducers } from 'redux';

import user from './userReducer';
import people from './peopleReducer';

export default combineReducers({
  user,
  people,
});
