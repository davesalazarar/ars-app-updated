import * as React from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {AuthNavigation} from '@/ui/screens/Auth/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@/ui/screens/Navigation';

const getIsSignedIn = () => {
  return false;
};

export default function App() {
  return (
    <RootSiblingParent>
      <NavigationContainer>
        {getIsSignedIn() ? (
          <>
            <Navigation />
          </>
        ) : (
          <>
            <AuthNavigation />
          </>
        )}
      </NavigationContainer>
    </RootSiblingParent>
  );
}
