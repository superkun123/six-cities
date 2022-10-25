import { State } from '../types/state';
import { createSlice } from '@reduxjs/toolkit';

const initialState:State = {
  cityName: 'Paris',
};


export const citySlice  = createSlice( {
  name: 'city',
  initialState,
  reducers: {
    cityChange (state:State, action) {
      state.cityName = action.payload;
    },
  },
});

export const { cityChange } = citySlice.actions;

export const selectCount = (state:State) => state.cityName;


export default citySlice.reducer;
