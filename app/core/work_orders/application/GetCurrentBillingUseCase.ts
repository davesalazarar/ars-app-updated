import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {CurrentBillingResponse} from '../domain/WorkOrder';

@injectable()
export class GetCurrentBillingUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetCurrentBilling(): Promise<CurrentBillingResponse[]> {
    return await this._repository.getCurrentBilling();
  }
}
