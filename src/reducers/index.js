// Package import
import { combineReducers } from 'redux';

// Local import
import weatherReducer from './weather';

export default combineReducers({
  weather: weatherReducer,
});