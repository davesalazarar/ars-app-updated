import {inject, injectable} from 'inversify';
import {ServiceLocator} from '../domain/ServiceLocator';
import {ServiceRepository} from '../domain/ServiceRepository';
import {RescueService} from '../domain/RescueService';

@injectable()
export class GetRescueServicesUseCase {
  private _repository: ServiceRepository;

  constructor(
    @inject(ServiceLocator.ServiceRepository) repository: ServiceRepository,
  ) {
    this._repository = repository;
  }

  async getRescueServices(): Promise<RescueService[]> {
    return await this._repository.getRescueServices();
  }
}
