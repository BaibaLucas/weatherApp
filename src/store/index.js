// Package import
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// Reducer
import rootReducer from '../reducers';
// MW
import apiMiddleware from '../middlewares/api';

// Store creation
const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(apiMiddleware),
  ),
);

export default store;