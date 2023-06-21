import {inject, injectable} from 'inversify';
import {GeneralStorageRepository} from '../domain/GeneralStorageRepository';
import {SharedLocator} from '../domain/SharedLocator';

@injectable()
export class SaveGeneralStorageValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  get(key: string, value: string): Promise<void> {
    return this._repository.save(key, value);
  }
}
