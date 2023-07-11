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

  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        async p => {
          const coords: Position = {
            latitude: p.coords.latitude,
            longitude: p.coords.longitude,
          };
          setPosition(coords);
          console.log(coords);
          const usecase = LocationContainer.get<GetCurrentAddressUseCase>(
            LocationLocator.GetCurrentAddressUseCase,
          );
          console.log('getting address', coords);
          if (coords) {
            const data = await usecase.getCurrentAddress(
              coords.latitude.toString(),
              coords.longitude.toString(),
            );
            console.log('data from backend', data);
          }
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
