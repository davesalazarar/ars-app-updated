import {LoginResponse} from '@/core/auth/application/LoginResponse';

export interface AuthRepository {
  login(account: string, password: string): Promise<LoginResponse>;
}
