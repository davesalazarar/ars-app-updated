import {createSlice} from '@reduxjs/toolkit';

export const locationSlice = createSlice({
  name: 'location',
  initialState: {
    address: '',
  },
  reducers: {
    saveLocation: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {saveLocation} = locationSlice.actions;
