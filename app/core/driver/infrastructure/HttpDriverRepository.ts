import axios from 'axios';
import {HOST} from '@/core/shared/infrastructure/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {DriverRepository} from '../domain/DriverRepository';
import {WorkStatus, WorkStatusResponse} from '../domain/Driver';

@injectable()
export class HttpDriverRepository implements DriverRepository {
  async setWorkStatus(status: WorkStatus): Promise<WorkStatusResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/driver/work`, {
      withCredentials: true,
    });
    return data.data.data;
  }
}
