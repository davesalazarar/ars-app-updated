import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {TodayOngoingWorkOrdersResponse} from '../domain/WorkOrder';
@injectable()
export class GetTodayOngoingWorkOrdersUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetTodayOngoingWorkOrders(): Promise<TodayOngoingWorkOrdersResponse[]> {
    return await this._repository.getTodayOngoingWorkOrders();
  }
}
