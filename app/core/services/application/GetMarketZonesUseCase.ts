import {inject, injectable} from 'inversify';
import {MarketZoneResponse} from '../domain/MarketZone';
import {ServiceLocator} from '../domain/ServiceLocator';
import {ServiceRepository} from '../domain/ServiceRepository';

@injectable()
export class GetMarketZonesUseCase {
  private _repository: ServiceRepository;

  constructor(
    @inject(ServiceLocator.ServiceRepository) repository: ServiceRepository,
  ) {
    this._repository = repository;
  }

  async getMarketZones(): Promise<MarketZoneResponse[]> {
    return await this._repository.getMarketZoneList();
  }
}
