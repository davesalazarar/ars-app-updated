import {GetMarketZonesUseCase} from '@/core/services/application/GetMarketZonesUseCase';
import {MarketZoneResponse} from '@/core/services/domain/MarketZone';
import {ServiceLocator} from '@/core/services/domain/ServiceLocator';
import {ServiceContainer} from '@/core/services/ServicesContainer';
import {useEffect, useState} from 'react';

export const useMarketZones = () => {
  const [marketZones, setMarketZones] = useState<MarketZoneResponse[]>();
  useEffect(() => {
    const getMarketZones = async () => {
      try {
        const usecase = ServiceContainer.get<GetMarketZonesUseCase>(
          ServiceLocator.GetMarketZonesUseCase,
        );
        const data = await usecase.getMarketZones();
        setMarketZones(data);
      } catch (error) {
        console.log(error);
      }
    };
    getMarketZones();
  }, []);
  return {marketZones};
};
