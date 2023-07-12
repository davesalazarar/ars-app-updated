import 'reflect-metadata';

import {Container} from 'inversify';
import {GetMarketZonesUseCase} from './application/GetMarketZonesUseCase';
import {ServiceLocator} from './domain/ServiceLocator';
import {ServiceRepository} from './domain/ServiceRepository';
import {HttpServiceRepository} from './infrastructure/HttpServiceRepository';

const ServiceContainer = new Container();
ServiceContainer.bind<GetMarketZonesUseCase>(
  ServiceLocator.GetMarketZonesUseCase,
).to(GetMarketZonesUseCase);
ServiceContainer.bind<ServiceRepository>(ServiceLocator.ServiceRepository).to(
  HttpServiceRepository,
);
export {ServiceContainer};
