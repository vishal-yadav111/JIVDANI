// src/reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userReducer';
import authReducer from './authReducer';

const rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
});

export default rootReducer;
