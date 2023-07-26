import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WOHistory from './WOHistory';
import WOHistoryDetail from './WOHistoryDetail';

const Stack = createStackNavigator();

export default function WOHistoryNavigation() {
  return (
    <Stack.Navigator initialRouteName="WOHistory">
      <Stack.Screen
        name="WOHistory"
        component={WOHistory}
        options={{headerShown: false}}
      />
      <Stack.Screen name="WOHistoryDetail" component={WOHistoryDetail} />
    </Stack.Navigator>
  );
}
