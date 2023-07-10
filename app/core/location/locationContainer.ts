import 'reflect-metadata';

import {Container} from 'inversify';
import {GetCurrentAddressUseCase} from './application/GetCurrentAddressUseCase';
import {LocationLocator} from './domain/LocationLocator';
import {LocationRepository} from './domain/LocationRepository';
import {HttpLocationRepository} from './infrastructure/HttpLocationRepository';
import { LocationService } from './domain/LocationService';
import { RNLocationService } from './infrastructure/RNLocationService';

const LocationContainer = new Container();
LocationContainer.bind<GetCurrentAddressUseCase>(
  LocationLocator.GetCurrentAddressUseCase,
).to(GetCurrentAddressUseCase);
LocationContainer.bind<LocationRepository>(
  LocationLocator.LocationRepository,
).to(HttpLocationRepository);
LocationContainer.bind<LocationService>(
  LocationLocator.LocationService,
).to(RNLocationService);
export {LocationContainer};
