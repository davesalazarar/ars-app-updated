import moment from 'moment';
import {StyleSheet} from 'react-native';
import {PDISC} from './constants';

const Battery = require('@/assets/order/Battery.png');
const Fuel = require('@/assets/order/Fuel.png');
const Lockout = require('@/assets/order/Lockout.png');
const Tire = require('@/assets/order/Tire.png');
const Jump = require('@/assets/order/Jump.png');

const styles = StyleSheet.create({
  bold: {
    fontWeight: 'bold',
  },
});
const AlertColor_bg: any = {
  0: 'rgba(106, 191, 71, 0.1)',
  1: 'rgba(255, 170, 0, 0.1)',
  2: 'rgba(250, 80, 81, 0.1)',
};
const AlertColor_text: any = {
  0: {color: 'rgba(106, 191, 71, 1)', text: 'ETA Normal'},
  1: {color: 'rgba(255, 170, 0, 1)', text: 'ETA Alerting'},
  2: {color: 'rgba(250, 80, 81, 1)', text: 'ETA Alerting'},
};

const statusColor = [
  {
    color: '#6ABF47',
    status: [2, 3, 6, 7, 9, 10, 11, 19, 36, 23, 24, 25],
  },
  {
    color: '#FA6400',
    status: [8, 18, 39, 47, 48],
  },
  {
    color: '#999999',
    status: [13, 14, 17],
  },
  {
    color: '#2B8DBC',
    status: PDISC,
  },
];
export const matchAlertColor_text = (id: string) => {
  for (const key in AlertColor_text) {
    if (id === key) {
      const element = AlertColor_text[key];
      return {...element};
    }
  }
};
export const matchAlertColor_bg = (id: string) => {
  let color = '';

  for (const key in AlertColor_bg) {
    if (id === key) {
      const element = AlertColor_bg[key];
      color = element;
      break;
    }
  }

  return color;
};
export const getBoldStyles = (filterType: number, orderStatus: number) => {
  const bold = filterType === 3 && PDISC.includes(orderStatus);

  return bold ? styles.bold : null;
};

export const decorateZip = (zip: string) => {
  // note: when on the 'ALL' tab there is no zip on dataSource. This accounts for that and will show it when it is populated in the future.
  if (zip && zip != null) {
    return `, ${zip}`;
  }

  return '';
};
export const MatchOrderStatusColor = (orderStatus: number) => {
  let color;
  for (let i = 0; i < statusColor.length; i++) {
    const element = statusColor[i];
    const status = element.status;
    for (let j = 0; j < status.length; j++) {
      const eleStatus = status[j];
      if (eleStatus === orderStatus) {
        color = element.color;
        break;
      }
    }
  }
  return color;
};

export const handleBackstageServices = (serviceId: number | undefined) => {
  switch (serviceId) {
    case 1:
      return Lockout;
    case 2:
      return Jump;
    case 3:
      return Tire;
    case 4:
      return Fuel;
    case 8:
      return Battery;
    default:
      break;
  }
};

export const showCreatedTime = (createTime: string) => {
  return moment(createTime).format('L');
};
