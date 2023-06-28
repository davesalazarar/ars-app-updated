import {createSlice} from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {},
  reducers: {
    saveUser: (state, action) => {
      return {...state, ...action.payload};
    },
    resetUser: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {saveUser, resetUser} = userSlice.actions;
