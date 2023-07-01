import {configureStore} from '@reduxjs/toolkit';
import {locationSlice} from './states/location';
import {userSlice} from './states/user';

export const appStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    location: locationSlice.reducer,
  },
});
