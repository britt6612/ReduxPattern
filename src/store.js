import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducer from './loginRedux/reducer';

// Only show dev tools when developing

// const middlewares = process.env.NODE_ENV === 'development'
//  ? [composeWithDevTools(applyMiddleware(thunk, logger))]
//  : [(applyMiddleware(thunk, logger))]

const store = createStore(reducer,  {}, composeWithDevTools(applyMiddleware(thunk, logger)));
export default store;