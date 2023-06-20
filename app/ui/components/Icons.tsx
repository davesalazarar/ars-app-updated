import * as React from 'react';
import {Image} from 'react-native';

// Bottom Tab icons
const availability_icon = require('@/assets/navigation/calendar-outline.png');
const availability_active_icon = require('@/assets/navigation/calendar.png');
const home_icon = require('@/assets/navigation/home-outline.png');
const home_active_icon = require('@/assets/navigation/home.png');
const work_orders_icon = require('@/assets/navigation/work-order-outline.png');
const work_orders_active_icon = require('@/assets/navigation/work-order.png');
// Drawer Nav icons
const resource = require('@/assets/navigation/resource.png');
const chat = require('@/assets/navigation/chat.png');
const service = require('@/assets/navigation/service.png');
const settings = require('@/assets/navigation/settings.png');
const support = require('@/assets/navigation/support.png');
const history = require('@/assets/navigation/history.png');
const payment = require('@/assets/navigation/payment.png');

export const HomeTabIcon = ({focused, size}: any) => (
  <Image
    source={focused ? home_active_icon : home_icon}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const HomeIcon = ({size}: any) => (
  <Image
    source={home_active_icon}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const WorkOrdersIcon = ({focused, size}: any) => (
  <Image
    source={focused ? work_orders_active_icon : work_orders_icon}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const AvailabilityIcon = ({focused, size}: any) => (
  <Image
    source={focused ? availability_active_icon : availability_icon}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const ResourceIcon = ({size}: any) => (
  <Image
    source={resource}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const ChatIcon = ({size}: any) => (
  <Image
    source={chat}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const ServiceIcon = ({size}: any) => (
  <Image
    source={service}
    style={{
      width: size,
      height: size,
    }}
  />
);

export const SettingsIcon = ({size}: any) => (
  <Image
    source={settings}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);

export const SupportIcon = ({size}: any) => (
  <Image
    source={support}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);

export const HistoryIcon = ({size}: any) => (
  <Image
    source={history}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);

export const PaymentIcon = ({size}: any) => (
  <Image
    source={payment}
    style={{
      width: size,
      height: size,
      borderRadius: size,
    }}
  />
);
