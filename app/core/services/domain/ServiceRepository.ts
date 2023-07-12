import {MarketZoneResponse} from './MarketZone';

export interface ServiceRepository {
  getMarketZoneList(): Promise<MarketZoneResponse[]>;
}
