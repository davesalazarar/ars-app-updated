import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WOHistory from './WOHistory';
import WOHistoryDetail from './WOHistoryDetail';

const Stack = createStackNavigator();

export default function WOHistoryNavigation() {
  return (
    <Stack.Navigator initialRouteName="WOHistory">
      <Stack.Screen
        options={{title: 'Work Order History'}}
        name="WOHistory"
        component={WOHistory}
      />
      <Stack.Screen
        name="WOHistoryDetail"
        options={({route}: any) => ({title: route.params.name})}
        component={WOHistoryDetail}
      />
    </Stack.Navigator>
  );
}
