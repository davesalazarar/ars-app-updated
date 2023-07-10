import {Text, View} from 'react-native';
import React from 'react';
import {useUser} from '@/ui/hooks/user';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './Auth/AuthNavigation';
import Navigation from './Navigation/Navigation';
import {RootSiblingParent} from 'react-native-root-siblings';

export const SplashScreen = () => {
  const {user, isLoading} = useUser();
  console.log(user, isLoading);
  const AppNavigation = () => {
    return (
      <>
        {user.id !== 0 ? (
          <>
            <Navigation />
          </>
        ) : (
          <>
            <AuthNavigation />
          </>
        )}
      </>
    );
  };
  return (
    <RootSiblingParent>
      <NavigationContainer>
        {isLoading ? <Text>loading...</Text> : <AppNavigation />}
      </NavigationContainer>
    </RootSiblingParent>
  );
};
