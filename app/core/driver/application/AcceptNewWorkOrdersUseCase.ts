import {inject, injectable} from 'inversify';
import {DriverLocator} from '../domain/DriverLocator';
import {DriverRepository} from '../domain/DriverRepository';

@injectable()
export class AcceptNewWorkOrdersUseCase {
  private _repository: DriverRepository;

  constructor(
    @inject(DriverLocator.DriverRepository) repository: DriverRepository,
  ) {
    this._repository = repository;
  }

  async AcceptNewWorkOrders(acceptNewWorkOrders: boolean): Promise<void> {
    await this._repository.acceptNewWorkOrders(acceptNewWorkOrders);
  }
}
