import { combineReducers } from 'redux';
import userResource from '../resources/user.js';

export default combineReducers({
  users: userResource.reducer,
});
