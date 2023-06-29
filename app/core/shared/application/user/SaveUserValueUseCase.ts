import {GeneralStorageRepository} from '@/core/shared/domain/GeneralStorageRepository';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {StorageKeys} from '@/core/shared/domain/StorageKeys';
import {User} from '@/core/shared/domain/User';
import {inject, injectable} from 'inversify';

@injectable()
export class SaveUserValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  async save(value: User): Promise<void> {
    return await this._repository.save(StorageKeys.USER, JSON.stringify(value));
  }
}
