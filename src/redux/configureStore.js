import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { combineReducers } from "redux";
import { newsReducer } from './reducers/newsReducer.js';
import { catsReducer } from './reducers/catsReducer.js';
import { commentsReducer } from './reducers/commentsReducer.js';
import { application } from './reducers/signupReducer.js';

const combineReducer = combineReducers({ newsReducer, catsReducer, commentsReducer, application })

export const store = createStore(combineReducer, applyMiddleware(thunk))

