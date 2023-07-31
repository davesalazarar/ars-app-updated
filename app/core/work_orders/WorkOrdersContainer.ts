import 'reflect-metadata';

import {Container} from 'inversify';
import {GetWorkOrderHistoryUseCase} from './application/GetWorkOrderHistoryUseCase';
import {WorkOrderLocator} from './domain/WorkOrderLocator';
import {WorkOrderRepository} from './domain/WorkOrderRepository';
import {HttpWorkOrderRepository} from './infrastructure/HttpWorkOrderRepository';
import {GetTodayOngoingWorkOrdersUseCase} from './application/GetTodayOngoingWorkOrdersUseCase';
import {GetTodayPoolWorkOrdersUseCase} from './application/GetTodayPoolOrderUseCase';
import {GetTodayWorkOrdersUseCase} from './application/GetTodayWorkOrdersUseCase';
import {GetCurrentBillingOverviewUseCase} from './application/GetCurrentBillingOverviewUseCase';
import {GetCurrentBillingUseCase} from './application/GetCurrentBillingUseCase';

const WorkOrdersContainer = new Container();

WorkOrdersContainer.bind<GetWorkOrderHistoryUseCase>(
  WorkOrderLocator.GetWorkOrderHistoryUseCase,
).to(GetWorkOrderHistoryUseCase);

WorkOrdersContainer.bind<GetTodayOngoingWorkOrdersUseCase>(
  WorkOrderLocator.GetTodayOngoingWorkOrdersUseCase,
).to(GetTodayOngoingWorkOrdersUseCase);

WorkOrdersContainer.bind<GetTodayPoolWorkOrdersUseCase>(
  WorkOrderLocator.GetTodayPoolWorkOrdersUseCase,
).to(GetTodayPoolWorkOrdersUseCase);

WorkOrdersContainer.bind<GetTodayWorkOrdersUseCase>(
  WorkOrderLocator.GetTodayWorkOrdersUseCase,
).to(GetTodayWorkOrdersUseCase);

WorkOrdersContainer.bind<GetCurrentBillingOverviewUseCase>(
  WorkOrderLocator.GetCurrentBillingOverviewUseCase,
).to(GetCurrentBillingOverviewUseCase);

WorkOrdersContainer.bind<GetCurrentBillingUseCase>(
  WorkOrderLocator.GetCurrentBillingUseCase,
).to(GetCurrentBillingUseCase);

WorkOrdersContainer.bind<WorkOrderRepository>(
  WorkOrderLocator.WorkOrderRepository,
).to(HttpWorkOrderRepository);

export {WorkOrdersContainer};
