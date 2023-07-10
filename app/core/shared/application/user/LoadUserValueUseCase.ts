import {GeneralStorageRepository} from '@/core/shared/domain/GeneralStorageRepository';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {StorageKeys} from '@/core/shared/domain/StorageKeys';
import {User} from '@/core/shared/domain/User';
import {inject, injectable} from 'inversify';

@injectable()
export class LoadUserValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  async load(): Promise<User> {
    const data = await this._repository.load(StorageKeys.USER);
    if (!data) {
      return new Promise(resolve => resolve(User.Empty()));
    }
    const user = JSON.parse(data) as User;
    return new Promise(resolve => resolve(user));
  }
}
