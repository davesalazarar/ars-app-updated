import {createSlice} from '@reduxjs/toolkit';
import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {SharedContainer} from '@/core/shared/sharedContainer';

export const getStoredUser = async () => {
  const usecase = SharedContainer.get<LoadUserValueUseCase>(
    SharedLocator.LoadUserValueUseCase,
  );
  return await usecase.load();
};

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    email: '',
    firstLogin: 0,
    id: 0,
    username: '',
    onDuty: false,
    isAcceptingWOs: false,
    isLoggedIn: false,
    locationUpdateSuccess: false,
  },
  reducers: {
    saveUser: (state, action) => {
      console.log('saved data: ', action.payload);
      return {...state, ...action.payload};
    },
    onDuty: state => {
      console.log('on duty redux');
      return {
        ...state,
        onDuty: true,
        isAcceptingWOs: true,
        locationUpdateSuccess: true,
      };
    },
    offDuty: state => {
      console.log('off duty redux');
      return {
        ...state,
        onDuty: false,
        isAcceptingWOs: false,
        locationUpdateSuccess: false,
      };
    },
    resetUser: () => {
      return {
        email: '',
        firstLogin: 0,
        id: 0,
        username: '',
        onDuty: false,
        isAcceptingWOs: false,
        isLoggedIn: false,
        locationUpdateSuccess: false,
      };
    },
  },
});

export const {saveUser, resetUser, onDuty, offDuty} = userSlice.actions;
