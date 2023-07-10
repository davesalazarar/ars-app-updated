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
  },
  reducers: {
    saveUser: (state, action) => {
      console.log('saved data: ', action.payload);
      return {...state, ...action.payload};
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
      };
    },
  },
});

export const {saveUser, resetUser} = userSlice.actions;
