import {MarketZoneResponse} from './MarketZone';
import {RescueService} from './RescueService';

export interface ServiceRepository {
  getMarketZoneList(): Promise<MarketZoneResponse[]>;
  getRescueServices(): Promise<RescueService[]>;
}
