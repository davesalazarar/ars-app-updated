import {inject, injectable} from 'inversify';
import {AuthLocator} from '../domain/AuthLocator';
import {AuthRepository} from '../domain/AuthRepossitory';

@injectable()
export class LogoutUseCase {
  private _repository: AuthRepository;

  constructor(@inject(AuthLocator.AuthRepository) repository: AuthRepository) {
    this._repository = repository;
  }

  async logout(): Promise<void> {
    return await this._repository.logout();
  }
}
