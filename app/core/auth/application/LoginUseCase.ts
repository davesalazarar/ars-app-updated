import {inject, injectable} from 'inversify';
import {AuthLocator} from '../domain/AuthLocator';
import {AuthRepository} from '../domain/AuthRepossitory';

@injectable()
export class LoginUseCase {
  private _repository: AuthRepository;

  constructor(@inject(AuthLocator.AuthRepository) repository: AuthRepository) {
    this._repository = repository;
  }

  async login(account: string, password: string): Promise<void> {
    await this._repository.login(account, password);
  }
}
