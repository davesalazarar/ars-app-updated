import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {
  WorkOrderHistoryRequest,
  WorkOrderHistoryResponse,
} from '../domain/WorkOrder';
@injectable()
export class GetWorkOrderHistoryUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetWorkOrderHistory(
    request: WorkOrderHistoryRequest,
  ): Promise<WorkOrderHistoryResponse> {
    return await this._repository.getWorkOrderHistory(request);
  }
}
