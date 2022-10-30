import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';


const store:object = configureStore({
  reducer: reducer,
});

export default store;
