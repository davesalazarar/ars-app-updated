export interface WorkOrderHistoryRequest {
  page: number;
  pageSize: number;
  serviceId?: number;
  filterMonth?: string;
}

export interface WorkOrder {
  dispatchTime: string;
  orderId: number;
  orderStatus: number;
  orderStatusName: string;
  services: WorkOrderService[];
}

export interface WorkOrderService {
  mark: boolean;
  orderId: string;
  serviceId: number;
  serviceName: string;
}
