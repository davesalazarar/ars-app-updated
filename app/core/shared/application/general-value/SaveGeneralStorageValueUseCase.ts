import {GeneralStorageRepository} from '@/core/shared/domain/GeneralStorageRepository';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {inject, injectable} from 'inversify';

@injectable()
export class SaveGeneralStorageValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  async set(key: string, value: string): Promise<void> {
    return await this._repository.save(key, value);
  }
}
