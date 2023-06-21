import 'reflect-metadata';

import {Container} from 'inversify';
import {SharedLocator} from './domain/SharedLocator';
import {AsyncStorageGeneralStorageRepository} from './infrastructure/AsyncStorageGeneralStorageRepository';
import {GeneralStorageRepository} from './domain/GeneralStorageRepository';
import {LoadGeneralStorageValueUseCase} from './application/LoadGeneralStorageValueUseCase';
import {SaveGeneralStorageValueUseCase} from './application/SaveGeneralStorageValueUseCase';

const AuthContainer = new Container();

AuthContainer.bind<SaveGeneralStorageValueUseCase>(
  SharedLocator.SaveGeneralStorageValueUseCase,
).to(SaveGeneralStorageValueUseCase);

AuthContainer.bind<LoadGeneralStorageValueUseCase>(
  SharedLocator.LoadGeneralStorageValueUseCase,
).to(LoadGeneralStorageValueUseCase);

AuthContainer.bind<GeneralStorageRepository>(
  SharedLocator.GeneralStorageRepository,
).to(AsyncStorageGeneralStorageRepository);

export {AuthContainer};
