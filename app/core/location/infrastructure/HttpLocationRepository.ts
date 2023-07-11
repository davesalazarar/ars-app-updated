import axios from 'axios';
import {HOST} from '@/core/shared/infrastructure/Constants';
import {injectable} from 'inversify';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {LocationRepository} from '../domain/LocationRepository';
import {AppLocation, AddressResponse} from '../domain/AppLocation';

@injectable()
export class HttpLocationRepository implements LocationRepository {
  async getCurrentAddress(location: AppLocation): Promise<AddressResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/driver/address/get`,
      {...location},
      {
        withCredentials: true,
      },
    );
    console.log(data.data);
    return data.data.data;
  }
}
