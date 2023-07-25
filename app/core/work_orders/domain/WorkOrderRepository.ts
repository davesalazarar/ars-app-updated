import {WorkOrderHistoryRequest} from './WorkOrder';

export interface WorkOrderRepository {
  getWorkOrderHistory(request: WorkOrderHistoryRequest): Promise<any[]>;
}
