import { combineReducers } from 'redux';
import error from './errorReducers';
import menu from './menuReducers';

export default combineReducers({
  error,
  menu
});
