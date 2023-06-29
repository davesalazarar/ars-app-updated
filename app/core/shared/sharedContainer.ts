import 'reflect-metadata';

import {Container} from 'inversify';
import {SharedLocator} from './domain/SharedLocator';
import {AsyncStorageGeneralStorageRepository} from './infrastructure/AsyncStorageGeneralStorageRepository';
import {GeneralStorageRepository} from './domain/GeneralStorageRepository';
import {LoadGeneralStorageValueUseCase} from './application/general-value/LoadGeneralStorageValueUseCase';
import {SaveGeneralStorageValueUseCase} from './application/general-value/SaveGeneralStorageValueUseCase';
import {LoadUserValueUseCase} from './application/user/LoadUserValueUseCase';
import {SaveUserValueUseCase} from './application/user/SaveUserValueUseCase';

const SharedContainer = new Container();

SharedContainer.bind<SaveGeneralStorageValueUseCase>(
  SharedLocator.SaveGeneralStorageValueUseCase,
).to(SaveGeneralStorageValueUseCase);

SharedContainer.bind<LoadGeneralStorageValueUseCase>(
  SharedLocator.LoadGeneralStorageValueUseCase,
).to(LoadGeneralStorageValueUseCase);

SharedContainer.bind<LoadUserValueUseCase>(
  SharedLocator.LoadUserValueUseCase,
).to(LoadUserValueUseCase);

SharedContainer.bind<SaveUserValueUseCase>(
  SharedLocator.SaveUserValueUseCase,
).to(SaveUserValueUseCase);
SharedContainer.bind<GeneralStorageRepository>(
  SharedLocator.GeneralStorageRepository,
).to(AsyncStorageGeneralStorageRepository);

export {SharedContainer};
