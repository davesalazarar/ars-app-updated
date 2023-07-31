import {inject, injectable} from 'inversify';
import {WorkOrderRepository} from '../domain/WorkOrderRepository';
import {WorkOrderLocator} from '../domain/WorkOrderLocator';
import {TodayPoolWorkOrdersResponse} from '../domain/WorkOrder';
@injectable()
export class GetTodayPoolWorkOrdersUseCase {
  private _repository: WorkOrderRepository;

  constructor(
    @inject(WorkOrderLocator.WorkOrderRepository)
    repository: WorkOrderRepository,
  ) {
    this._repository = repository;
  }

  async GetTodayPoolWorkOrders(): Promise<TodayPoolWorkOrdersResponse[]> {
    return await this._repository.getTodayPoolWorkOrders();
  }
}
