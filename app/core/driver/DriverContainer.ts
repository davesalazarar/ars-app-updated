import 'reflect-metadata';

import {Container} from 'inversify';
import {DriverLocator} from './domain/DriverLocator';
import {DriverRepository} from './domain/DriverRepository';
import {HttpDriverRepository} from './infrastructure/HttpDriverRepository';
import {SetWorkStatusUseCase} from './application/SetWorkStatusUseCase';

const DriverContainer = new Container();

DriverContainer.bind<SetWorkStatusUseCase>(
  DriverLocator.SetWorkStatusUseCase,
).to(SetWorkStatusUseCase);
DriverContainer.bind<DriverRepository>(DriverLocator.DriverRepository).to(
  HttpDriverRepository,
);

export {DriverContainer};
