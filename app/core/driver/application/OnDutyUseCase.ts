import {inject, injectable} from 'inversify';
import {WorkStatus} from '../domain/Driver';
import {DriverLocator} from '../domain/DriverLocator';
import {DriverRepository} from '../domain/DriverRepository';

@injectable()
export class OnDutyUseCase {
  private _repository: DriverRepository;

  constructor(
    @inject(DriverLocator.DriverRepository) repository: DriverRepository,
  ) {
    this._repository = repository;
  }

  async onDuty(): Promise<void> {
    await this._repository.setWorkStatus(WorkStatus.ON_DUTY);
  }
}
