import axios from 'axios';
import {HOST} from '@/core/shared/infrastructure/Constants';
import {injectable} from 'inversify';
import {AuthRepository} from '@/core/auth/domain/AuthRepossitory';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {InvalidCredentialsError} from '@/core/shared/domain/Errors';
import {LoginResponse} from '../domain/LoginResponse';
@injectable()
export class HttpAuthRepository implements AuthRepository {
  async login(account: string, password: string): Promise<LoginResponse> {
    const instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/auth/login`,
      {account, password},
      {
        withCredentials: true,
      },
    );
    if (!data.data.data) {
      throw new InvalidCredentialsError(data.data.msg);
    }
    return data.data;
  }
}
