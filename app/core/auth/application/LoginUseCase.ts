import {inject} from 'inversify';
import {AuthLocator} from '../domain/AuthLocator';
import {AuthRepository} from '../domain/AuthRepossitory';
import {LoginResponse} from './LoginResponse';

export class LoginUseCase {
  private _authRepository: AuthRepository;

  constructor(
    @inject(AuthLocator.AuthRepository) authRepository: AuthRepository,
  ) {
    this._authRepository = authRepository;
  }

  login(account: string, password: string): Promise<LoginResponse> {
    return this._authRepository.login(account, password);
  }
}
