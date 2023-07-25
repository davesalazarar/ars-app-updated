import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text} from 'react-native';
import {
  HomeIcon,
  PaymentIcon,
  HistoryIcon,
  ChatIcon,
  SupportIcon,
  ServiceIcon,
  SettingsIcon,
  ResourceIcon,
} from '@/ui/components/Icons';
import CommunicationScreen from '@/ui/screens/Communication';
import PaymentsScreen from '@/ui/screens/Payments';
import ResourcesScreen from '@/ui/screens/Resources';
import SettingsScreen from '@/ui/screens/Settings';
import SupportCenterScreen from '@/ui/screens/SupportCenter';
import WOHistoryScreen from '@/ui/screens/WOHistory/WOHistory';
import {styles} from '../Styles';
import StatusLabel from './StatusHeader';
import {LogoutUseCase} from '@/core/auth/application/LogoutUseCase';
import {AuthContainer} from '@/core/auth/authContainer';
import {AuthLocator} from '@/core/auth/domain/AuthLocator';
import {useUser} from '@/ui/hooks/user';
import HomeNavigation from '../Navigation/HomeNavigation';
import ServiceCoverageScreen from '@/ui/screens/ServiceCoverage/ServiceCoverage';

const DrawerContent = (props: any) => {
  const {clearUser} = useUser();
  const Logout = async () => {
    try {
      const usecase = AuthContainer.get<LogoutUseCase>(
        AuthLocator.LogoutUseCase,
      );
      await usecase.logout();
      clearUser();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
      </View>
      <View style={styles.logincontainer}>
        <TouchableOpacity onPress={Logout} style={{borderRadius: 300}}>
          <LinearGradient
            start={{x: 0, y: 0.5}}
            end={{x: 1, y: 0.5}}
            colors={['rgba(72, 199, 224, 1)', 'rgba(45, 141, 188, 1)']}
            style={styles.login_button}>
            <View>
              <Text style={styles.login_button_text}>LOGOUT</Text>
            </View>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

const Drawer = createDrawerNavigator();

export const SideBar = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerTitleAlign: 'center',
        drawerPosition: 'right',
        headerTitle: () => <StatusLabel />,
      }}>
      <Drawer.Screen
        name="Home"
        component={HomeNavigation}
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
