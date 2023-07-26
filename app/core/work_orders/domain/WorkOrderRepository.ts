import {WorkOrderHistoryRequest, WorkOrderHistoryResponse} from './WorkOrder';

export interface WorkOrderRepository {
  getWorkOrderHistory(
    request: WorkOrderHistoryRequest,
  ): Promise<WorkOrderHistoryResponse>;
}
