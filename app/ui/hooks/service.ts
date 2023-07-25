import {GetMarketZonesUseCase} from '@/core/services/application/GetMarketZonesUseCase';
import {MarketZoneResponse} from '@/core/services/domain/MarketZone';
import {ServiceLocator} from '@/core/services/domain/ServiceLocator';
import {ServiceContainer} from '@/core/services/ServicesContainer';
import {GetRescueServicesUseCase} from '@/core/services/application/GetRescueServicesUseCase';
import {useEffect, useState} from 'react';
import {RescueService} from '@/core/services/domain/RescueService';

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

export const useRescueServices = () => {
  const [rescueServices, setRescueServices] = useState<RescueService[]>([]);
  useEffect(() => {
    const getRescueServices = async () => {
      try {
        const usecase = ServiceContainer.get<GetRescueServicesUseCase>(
          ServiceLocator.GetRescueServicesUseCase,
        );
        const data = await usecase.getRescueServices();
        setRescueServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    getRescueServices();
  }, []);
  return {rescueServices};
};
