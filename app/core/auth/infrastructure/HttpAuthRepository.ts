import axios from 'axios';
import {HOST} from '@/core/shared/infrastructure/Constants';
import {injectable} from 'inversify';
import {AuthRepository} from '@/core/auth/domain/AuthRepossitory';
import {
  AxiosRequestconfiguration,
  axiosResponseConfiguration,
} from '@/core/shared/infrastructure/AxiosInterceptors';
import {InvalidCredentialsError} from '@/core/shared/domain/Errors';
import {User} from '@/core/shared/domain/User';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {StorageKeys} from '@/core/shared/domain/StorageKeys';

@injectable()
export class HttpAuthRepository implements AuthRepository {
  async logout(): Promise<void> {
    await this.deleteToken();
  }

  async login(account: string, password: string): Promise<User> {
    let instance = axios.create();
    instance.interceptors.request.use(AxiosRequestconfiguration);
    instance.interceptors.response.use(axiosResponseConfiguration);
    const data = await instance.post(
      `${HOST}/app/auth/login`,
      {account, password},
      {
        withCredentials: true,
      },
    );
    const user = data.data.data;
    if (!user) {
      throw new InvalidCredentialsError(data.data.msg);
    }
    await this.saveToken(user.token);
    return new User(user.id, user.name, account, user.firstLogin, false, false);
  }

  async saveToken(value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(StorageKeys.TOKEN, value);
    } catch (e: any) {
      throw new Error(e);
    }
  }

  async deleteToken(): Promise<void> {
    try {
      const keys = [StorageKeys.TOKEN];
      await AsyncStorage.clear();
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
