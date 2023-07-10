import Geolocation from '@react-native-community/geolocation';
import {GetCurrentAddressUseCase} from '@/core/location/application/GetCurrentAddressUseCase';
import {LocationLocator} from '@/core/location/domain/LocationLocator';
import {LocationContainer} from '@/core/location/locationContainer';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';

interface Position {
  latitude: number;
  longitude: number;
}

export const useLocation = () => {
  const [position, setPosition] = useState<Position | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);
  const getAddress = async () => {
    const usecase = LocationContainer.get<GetCurrentAddressUseCase>(
      LocationLocator.GetCurrentAddressUseCase,
    );
    if (position) {
      const data = await usecase.getCurrentAddress(
        position.latitude.toString(),
        position.longitude.toString(),
      );
      console.log('data from backend', data);
    }
  };
  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        async p => {
          setPosition({
            latitude: p.coords.latitude,
            longitude: p.coords.longitude,
          });
          console.log(p);
          await getAddress();
        },
        error => Alert.alert('WatchPosition Error', JSON.stringify(error)),
        {
          enableHighAccuracy: true,
        },
      );
      setSubscriptionId(watchID);
    } catch (error) {
      Alert.alert('WatchPosition Error', JSON.stringify(error));
    }
  };

  const clearWatch = () => {
    subscriptionId !== null && Geolocation.clearWatch(subscriptionId);
    setSubscriptionId(null);
    setPosition(null);
    console.log('watch cleared');
  };

  useEffect(() => {}, [position]);

  return {position, watchPosition, clearWatch};
};
