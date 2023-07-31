import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WorkOrdersScreen from '@/ui/screens/WorkOrders/WorkOrders';
import {HomeTabIcon, WorkOrdersIcon} from '@/ui/components/Icons';
import {Provider} from 'react-redux';
import {appStore} from '@/ui/redux/store';
import HomeScreen from '../Home';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false, title: 'Home'}}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Work Orders"
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
