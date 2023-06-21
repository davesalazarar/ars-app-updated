import {inject, injectable} from 'inversify';
import {GeneralStorageRepository} from '../domain/GeneralStorageRepository';
import {SharedLocator} from '../domain/SharedLocator';

@injectable()
export class LoadGeneralStorageValueUseCase {
  private _repository: GeneralStorageRepository;

  constructor(
    @inject(SharedLocator.GeneralStorageRepository)
    repository: GeneralStorageRepository,
  ) {
    this._repository = repository;
  }

  get(key: string): Promise<string | null> {
    return this._repository.load(key);
  }
}
