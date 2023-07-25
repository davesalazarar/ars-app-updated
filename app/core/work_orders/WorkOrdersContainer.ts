import 'reflect-metadata';

import {Container} from 'inversify';
import {GetWorkOrderHistoryUseCase} from './application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from './domain/WorkOrderLocator';
import {WorkOrderRepository} from './domain/WorkOrderRepository';
import {HttpWorkOrderRepository} from './infrastructure/HttpWorkOrderRepository';

const WorkOrdersContainer = new Container();
WorkOrdersContainer.bind<GetWorkOrderHistoryUseCase>(
  WorkOrderLocator.GetWorkOrderHistoryUseCase,
).to(GetWorkOrderHistoryUseCase);
WorkOrdersContainer.bind<WorkOrderRepository>(
  WorkOrderLocator.WorkOrderRepository,
).to(HttpWorkOrderRepository);
export {WorkOrdersContainer};
