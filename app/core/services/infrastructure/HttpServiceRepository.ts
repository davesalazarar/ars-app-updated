import axios from 'axios';
import {HOST} from '@/core/shared/domain/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {MarketZoneResponse} from '../domain/MarketZone';
import {ServiceRepository} from '../domain/ServiceRepository';
import {RescueService} from '../domain/RescueService';

@injectable()
export class HttpServiceRepository implements ServiceRepository {
  async getRescueServices(): Promise<RescueService[]> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/master/rescueservice/list`, {
      withCredentials: true,
    });
    return data.data.data;
  }
  async getMarketZoneList(): Promise<MarketZoneResponse[]> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(`${HOST}/app/driver/marketzone/list`, {
      withCredentials: true,
    });
    return data.data.data;
  }
}
