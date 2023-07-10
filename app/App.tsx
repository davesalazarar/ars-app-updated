import * as React from 'react';
import {AuthNavigation} from '@/ui/screens/Auth/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@/ui/screens/Navigation/Navigation';
import {useUser} from '@/ui/hooks/user';
import {Provider} from 'react-redux';
import {appStore} from '@/ui/redux/store';
import {SplashScreen} from '@/ui/screens/SplashScreen';

export default function App() {
  return (
    <Provider store={appStore}>
      <SplashScreen />
    </Provider>
  );
}
