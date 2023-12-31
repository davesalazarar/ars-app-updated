import axios from 'axios';
import {HOST} from '@/core/shared/domain/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {DriverRepository} from '../domain/DriverRepository';
import {WorkStatus} from '../domain/Driver';

@injectable()
export class HttpDriverRepository implements DriverRepository {
  async acceptNewWorkOrders(acceptNewWorkOrders: boolean): Promise<void> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/driver/orders/accepting/toggle`,
      {notAcceptingOrders: !acceptNewWorkOrders},
      {
        withCredentials: true,
      },
    );
    return data.data.data;
  }
  async setWorkStatus(status: WorkStatus): Promise<any> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/driver/work`,
      {status},
      {
        withCredentials: true,
      },
    );
    return data.data.data;
  }
}
