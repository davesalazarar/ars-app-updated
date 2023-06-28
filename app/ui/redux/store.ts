import {configureStore} from '@reduxjs/toolkit';
import {userSlice} from './states/user';

export const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});
