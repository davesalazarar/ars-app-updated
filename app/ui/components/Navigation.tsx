import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import AvailabilityScreen from '@/ui/screens/Availability';
import WorkOrdersScreen from '@/ui/screens/WorkOrders';
import {
  AvailabilityIcon,
  ChatIcon,
  HistoryIcon,
  HomeIcon,
  HomeTabIcon,
  PaymentIcon,
  ResourceIcon,
  ServiceIcon,
  SettingsIcon,
  SupportIcon,
  WorkOrdersIcon,
} from './Icons';
import HomeScreen from '@/ui/screens/Home';
import PaymentsScreen from '@/ui/screens/Payments';
import WOHistoryScreen from '@/ui/screens/WOHistory';
import CommunicationScreen from '@/ui/screens/Communication';
import SupportCenterScreen from '@/ui/screens/SupportCenter';
import ServiceCoverageScreen from '@/ui/screens/ServiceCoverage';
import SettingsScreen from '@/ui/screens/Settings';
import ResourcesScreen from '@/ui/screens/Resources';
import Login from '@/ui/screens/Login/Login';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="Home"
        component={SideBar}
        options={{
          tabBarIcon: HomeTabIcon,
        }}
      />
      <Tab.Screen
        name="Availability"
        component={AvailabilityScreen}
        options={{
          tabBarIcon: AvailabilityIcon,
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

const Drawer = createDrawerNavigator();

const SideBar = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerTitleAlign: 'center',
        drawerPosition: 'right',
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{drawerIcon: HomeIcon}}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentsScreen}
        options={{drawerIcon: PaymentIcon}}
      />
      <Drawer.Screen
        name="WO History"
        component={WOHistoryScreen}
        options={{drawerIcon: HistoryIcon}}
      />
      <Drawer.Screen
        name="Communication"
        component={CommunicationScreen}
        options={{drawerIcon: ChatIcon}}
      />
      <Drawer.Screen
        name="Support Center"
        component={SupportCenterScreen}
        options={{drawerIcon: SupportIcon}}
      />
      <Drawer.Screen
        name="Service Coverage"
        component={ServiceCoverageScreen}
        options={{drawerIcon: ServiceIcon}}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{drawerIcon: SettingsIcon}}
      />
      <Drawer.Screen
        name="Resources"
        component={ResourcesScreen}
        options={{drawerIcon: ResourceIcon}}
      />
    </Drawer.Navigator>
  );
};
export default function Navigation() {
  return (
    <Login></Login>
    // <NavigationContainer>
    //   <BottomTabs />
    // </NavigationContainer>
  );
}
