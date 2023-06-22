import {GeneralStorageRepository} from '@/core/shared/domain/GeneralStorageRepository';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {inject, injectable} from 'inversify';

@injectable()
export class LoadGeneralStorageValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  async get(key: string): Promise<string | null> {
    return await this._repository.load(key);
  }
}
