import 'reflect-metadata';

import {Container} from 'inversify';
import {DriverLocator} from './domain/DriverLocator';
import {OnDutyUseCase} from './application/OnDutyUseCase';
import {DriverRepository} from './domain/DriverRepository';
import {HttpDriverRepository} from './infrastructure/HttpDriverRepository';
import {OffDutyUseCase} from './application/OffDutyUseCase';

const DriverContainer = new Container();

DriverContainer.bind<OnDutyUseCase>(DriverLocator.OnDutyUseCase).to(
  OnDutyUseCase,
);
DriverContainer.bind<DriverRepository>(DriverLocator.DriverRepository).to(
  HttpDriverRepository,
);
DriverContainer.bind<OffDutyUseCase>(DriverLocator.OffDutyUseCase).to(
  OffDutyUseCase,
);

export {DriverContainer};
