// import axios from 'axios';
import {injectable} from 'inversify';
import {LoginResponse} from '../application/LoginResponse';
import {AuthRepository} from '../domain/AuthRepossitory';

@injectable()
export class HttpAuthRepository implements AuthRepository {
  login(account: string, password: string): Promise<LoginResponse> {
    return new Promise(() => {
      return {
        name: account,
        token: password,
        id: 'esto se ha ejecutado bien',
      };
    });
    // return axios({
    //   method: 'post',
    //   url: '',
    //   data: {account, password},
    //   withCredentials: true,
    // });
  }
}
