import { createStore, applyMiddleware /* combineReducers */ } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './reducer';

// Add redux dev tools, it's the best! 🚀

/*
const middlewares = process.env.NODE_ENV === 'development'
  ? [reduxDevTools, thunk, logger]
  : [thunk, logger];
const store = createStore(
  combineReducers({
    login: reducer,
    user: myOtherReducer,
    somethingElse: oneMoreReducer
  }),
  {},
  applyMiddleware(middlewares)
);
*/
const store = createStore(reducer, {}, applyMiddleware(thunk, logger));
export default store;
