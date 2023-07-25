import axios from 'axios';
import {HOST} from '@/core/shared/domain/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderHistoryRequest} from '../domain/WorkOrder';

@injectable()
export class HttpWorkOrderRepository implements WorkOrderRepository {
  async getWorkOrderHistory(request: WorkOrderHistoryRequest): Promise<any[]> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/order/driver/list`, request, {
      withCredentials: true,
    });
    return data.data.data;
  }
}
