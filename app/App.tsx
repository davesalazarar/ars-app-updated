import * as React from 'react';
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
