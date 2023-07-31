import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {
  TodayWorkOrdersRequest,
  TodayWorkOrdersResponse,
} from '../domain/WorkOrder';
@injectable()
export class GetTodayWorkOrdersUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetTodayWorkOrders(
    request: TodayWorkOrdersRequest,
  ): Promise<TodayWorkOrdersResponse> {
    return await this._repository.getTodayWorkOrders(request);
  }
}
