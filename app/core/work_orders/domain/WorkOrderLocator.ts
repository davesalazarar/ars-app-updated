export const WorkOrderLocator = {
  WorkOrderRepository: Symbol.for('WorkOrderRepository'),
  GetWorkOrderHistoryUseCase: Symbol.for('GetWorkOrderHistoryUseCase'),
  GetTodayWorkOrdersUseCase: Symbol.for('GetTodayWorkOrdersUseCase'),
  GetCurrentBillingOverviewUseCase: Symbol.for(
    'GetCurrentBillingOverviewUseCase',
  ),
  GetCurrentBillingUseCase: Symbol.for('GetCurrentBillingUseCase'),
  GetTodayPoolWorkOrdersUseCase: Symbol.for('GetTodayPoolWorkOrdersUseCase'),
  GetTodayOngoingWorkOrdersUseCase: Symbol.for(
    'GetTodayOngoingWorkOrdersUseCase',
  ),
};
