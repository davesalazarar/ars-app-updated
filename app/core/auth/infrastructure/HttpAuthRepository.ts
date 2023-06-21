import axios from 'axios';
import {HOST} from '@/core/shared/domain/Constants';
import {injectable} from 'inversify';
import {AuthRepository} from '@/core/auth/domain/AuthRepossitory';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
@injectable()
export class HttpAuthRepository implements AuthRepository {
  login(account: string, password: string): Promise<any> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = instance.post(
      `${HOST}/app/auth/login`,
      {account, password},
      {
        withCredentials: true,
      },
    );
    return data;
  }
}
