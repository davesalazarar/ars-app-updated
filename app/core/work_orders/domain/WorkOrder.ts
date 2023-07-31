import {Pagination} from '@/core/shared/domain/Pagination';

export interface WorkOrderHistoryRequest {
  page: number;
  pageSize: number;
  serviceId?: number;
  filterMonth?: string;
}

export interface TodayWorkOrdersRequest {
  queryType: number;
}
export interface TodayWorkOrdersResponse {
  orderId: number;
  services: any[];
  orderStatus: number;
  orderStatusName: string;
  createTime: string;
  etaAlert: number;
  eta: number;
  fullLocation: string;
  endStatus: number;
  zip: string;
  layerIdentifier: string;
}
export interface TodayPoolWorkOrdersResponse {
  orderId: number;
  detailId: number;
  services: any[];
  eta: number;
  distance: number;
  vehicle: string;
  tag: string;
  odometer: number;
  motoristName: string;
  fullLocation: string;
  comment: string;
  longitude: number;
  latitude: number;
  lastOrderAddress: any;
  zip: string;
  layerIdentifier: string;
}
export interface CurrentBillingResponse {
  orderId: string;
  driverPrice: number;
  additionalPrice: number;
  incentivePrice: number;
  otPrice: number;
  totalPrice: number;
  orderFinishTime: string;
  status: number;
  type: number;
  updateTime: string;
  apIncrement: number;
}
export interface CurrentBillingOverviewResponse {
  totalEarned: number;
  completedWO: number;
}
export interface TodayOngoingWorkOrdersResponse {
  orderId: number;
  services: any[];
  orderStatus: number;
  orderStatusName: number;
  createTime: string;
  etaAlert: number;
  eta: number;
  fullLocation: string;
  endStatus: number;
  zip: string;
  layerIdentifier: string;
}
export interface WorkOrder {
  dispatchTime: string;
  orderId: number;
  orderStatus: number;
  orderStatusName: string;
  services: WorkOrderService[];
}

export interface WorkOrderHistoryResponse {
  data: WorkOrder[];
  page: Pagination;
}

export interface WorkOrderService {
  mark: boolean;
  orderId: string;
  serviceId: number;
  serviceName: string;
}
