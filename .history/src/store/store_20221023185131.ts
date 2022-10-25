import { combineReducers, configureStore } from '@reduxjs/toolkit';
import cityReducer from './reducer';

const rootReducer = combineReducers({
  cityReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
