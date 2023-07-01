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
    firstLogin: 0,
    id: 0,
    name: '',
    token: '',
    onDuty: false,
    isAcceptingWOs: false,
  },
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
