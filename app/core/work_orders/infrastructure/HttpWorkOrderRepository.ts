import axios from 'axios';
import {HOST} from '@/core/shared/domain/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {
  CurrentBillingOverviewResponse,
  CurrentBillingResponse,
  TodayOngoingWorkOrdersResponse,
  TodayPoolWorkOrdersResponse,
  TodayWorkOrdersRequest,
  TodayWorkOrdersResponse,
  WorkOrderHistoryRequest,
  WorkOrderHistoryResponse,
} from '../domain/WorkOrder';

@injectable()
export class HttpWorkOrderRepository implements WorkOrderRepository {
  async getCurrentBillingOverview(): Promise<CurrentBillingOverviewResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/billing/driverinvoice/hub/overview`,
      {
        withCredentials: true,
      },
    );
    const response = data.data.data;
    return response;
  }
  async getCurrentBilling(): Promise<CurrentBillingResponse[]> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/billing/driverinvoice/hub/current`,
      {
        withCredentials: true,
      },
    );
    const response = data.data.data;
    return response;
  }
  async getTodayPoolWorkOrders(): Promise<TodayPoolWorkOrdersResponse[]> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/order/pool`, {
      withCredentials: true,
    });
    const response = data.data.data;
    return response;
  }
  async getTodayOngoingWorkOrders(): Promise<TodayOngoingWorkOrdersResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/order/ongoing`, {
      withCredentials: true,
    });
    const response = data.data.data;
    return response;
  }
  async getTodayWorkOrders(
    request: TodayWorkOrdersRequest,
  ): Promise<TodayWorkOrdersResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/order/driver/pagetoday`,
      request,
      {
        withCredentials: true,
      },
    );
    const response = data.data.data;
    return response;
  }
  async getWorkOrderHistory(
    request: WorkOrderHistoryRequest,
  ): Promise<WorkOrderHistoryResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/order/driver/list`, request, {
      withCredentials: true,
    });
    const response = data.data;
    return response;
  }
}
