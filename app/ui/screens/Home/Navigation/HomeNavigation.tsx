import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkOrdersScreen from '@/ui/screens/work_orders/WorkOrders';
import {HomeTabIcon, WorkOrdersIcon} from '@/ui/components/Icons';
import {Provider} from 'react-redux';
import {appStore} from '@/ui/redux/store';
import HomeScreen from '../Home';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="WorkOrders"
        component={WorkOrdersScreen}
        options={{
          tabBarIcon: WorkOrdersIcon,
        }}
      />
    </Tab.Navigator>
  );
};

export default function HomeNavigation() {
  return (
    <Provider store={appStore}>
      <BottomTabs />
    </Provider>
  );
}
