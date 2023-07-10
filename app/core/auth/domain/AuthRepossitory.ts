import {User} from 'core/shared/domain/User';

export interface AuthRepository {
  login(account: string, password: string): Promise<User>;
  logout(): Promise<void>;
}
