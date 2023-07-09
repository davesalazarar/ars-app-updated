import Geolocation from '@react-native-community/geolocation';
import {useEffect, useState} from 'react';
import {Alert} from 'react-native';
import Toast from 'react-native-root-toast';

export const useLocation = () => {
  const [position, setPosition] = useState<string | null>(null);
  const [subscriptionId, setSubscriptionId] = useState<number | null>(null);

  const watchPosition = () => {
    try {
      const watchID = Geolocation.watchPosition(
        p => {
          Toast.show(JSON.stringify(p));
          setPosition(JSON.stringify(p));
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

  useEffect(() => {
    return () => {
      watchPosition();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {position, watchPosition, clearWatch};
};

export const useAddress = () => {};
