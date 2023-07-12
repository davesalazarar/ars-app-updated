export class MarketZoneResponse {
  readonly marketName: string;
  readonly zoneNames: string[];
  constructor(marketName: string, zoneNames: string[]) {
    this.marketName = marketName;
    this.zoneNames = zoneNames;
  }
}
