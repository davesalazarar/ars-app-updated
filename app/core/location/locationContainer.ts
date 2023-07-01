import 'reflect-metadata';

import {Container} from 'inversify';
import {GetCurrentAddressUseCase} from './application/GetCurrentAddressUseCase';
import {LocationLocator} from './domain/LocationLocator';
import {LocationRepository} from './domain/LocationRepository';
import {HttpLocationRepository} from './infrastructure/HttpLocationRepository';

const LocationContainer = new Container();
LocationContainer.bind<GetCurrentAddressUseCase>(
  LocationLocator.GetCurrentAddressUseCase,
).to(GetCurrentAddressUseCase);
LocationContainer.bind<LocationRepository>(
  LocationLocator.LocationRepository,
).to(HttpLocationRepository);
export {LocationContainer};
