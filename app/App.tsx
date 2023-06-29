import * as React from 'react';
import {RootSiblingParent} from 'react-native-root-siblings';
import {AuthNavigation} from '@/ui/screens/Auth/AuthNavigation';
import {NavigationContainer} from '@react-navigation/native';
import Navigation from '@/ui/screens/Navigation';
import {useUser} from '@/ui/hooks/user';

export default function App() {
  const {user} = useUser();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        {user ? (
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
