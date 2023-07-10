import {Text} from 'react-native';
import React from 'react';
import {useUser} from '@/ui/hooks/user';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './Auth/AuthNavigation';
import Navigation from './Navigation/Navigation';
import {RootSiblingParent} from 'react-native-root-siblings';

const AppNavigation = ({user}: any) => {
  return (
    <>
      {user.isLoggedIn ? (
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
export const SplashScreen = () => {
  const {user, isLoading} = useUser();
  return (
    <RootSiblingParent>
      <NavigationContainer>
        {isLoading ? <Text>loading...</Text> : <AppNavigation user={user} />}
      </NavigationContainer>
    </RootSiblingParent>
  );
};
