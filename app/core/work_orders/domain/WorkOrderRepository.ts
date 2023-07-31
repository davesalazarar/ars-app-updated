import {
  CurrentBillingOverviewResponse,
  CurrentBillingResponse,
  TodayOngoingWorkOrdersResponse,
  TodayPoolWorkOrdersResponse,
  TodayWorkOrdersRequest,
  TodayWorkOrdersResponse,
  WorkOrderHistoryRequest,
  WorkOrderHistoryResponse,
} from './WorkOrder';

export interface WorkOrderRepository {
  getWorkOrderHistory(
    request: WorkOrderHistoryRequest,
  ): Promise<WorkOrderHistoryResponse>;

  getTodayWorkOrders(
    request: TodayWorkOrdersRequest,
  ): Promise<TodayWorkOrdersResponse[]>;

  getTodayPoolWorkOrders(): Promise<TodayPoolWorkOrdersResponse[]>;

  getCurrentBilling(): Promise<CurrentBillingResponse[]>;
  getCurrentBillingOverview(): Promise<CurrentBillingOverviewResponse>;
  getTodayOngoingWorkOrders(): Promise<TodayOngoingWorkOrdersResponse[]>;
}
