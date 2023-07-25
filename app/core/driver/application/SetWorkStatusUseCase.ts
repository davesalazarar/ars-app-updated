import {inject, injectable} from 'inversify';
import {WorkStatus} from '../domain/Driver';
import {DriverLocator} from '../domain/DriverLocator';
import {DriverRepository} from '../domain/DriverRepository';

@injectable()
export class SetWorkStatusUseCase {
  private _repository: DriverRepository;

  constructor(
    @inject(DriverLocator.DriverRepository) repository: DriverRepository,
  ) {
    this._repository = repository;
  }

  async setWorkStatus(workStatus: WorkStatus): Promise<void> {
    await this._repository.setWorkStatus(workStatus);
  }
}
