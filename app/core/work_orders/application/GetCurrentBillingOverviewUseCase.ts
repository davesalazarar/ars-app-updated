import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {CurrentBillingOverviewResponse} from '../domain/WorkOrder';

@injectable()
export class GetCurrentBillingOverviewUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetCurrentBillingOverview(): Promise<CurrentBillingOverviewResponse> {
    return await this._repository.getCurrentBillingOverview();
  }
}
