import {LoginResponse} from 'core/auth/domain/LoginResponse';

export interface AuthRepository {
  login(account: string, password: string): Promise<LoginResponse>;
}
