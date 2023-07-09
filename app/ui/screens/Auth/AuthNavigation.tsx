import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ForgotPasswordScreen from '@/ui/screens/Auth/ForgotPassword/ForgotPassword';
import Login from './Login/Login';

const Stack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
};
