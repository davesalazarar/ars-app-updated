import {ListItem} from '@rneui/base';
import {Avatar} from '@rneui/themed';
import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {px2dp, setSpText, scaleHeight} from '@/ui/utils/screenUtil';
import {WorkOrder} from '@/core/work_orders/domain/WorkOrder';

const Battery = require('@/assets/order/Battery.png');
const Fuel = require('@/assets/order/Fuel.png');
const Lockout = require('@/assets/order/Lockout.png');
const Tire = require('@/assets/order/Tire.png');
const Jump = require('@/assets/order/Jump.png');

interface ListItemProps {
  navigation?: any;
  workOrder: WorkOrder;
}
const handleBackstageServices = (serviceId: number | undefined) => {
  console.log('handleBackstageServices', serviceId);
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

export const WorkOrderHistoryItem = (props: ListItemProps) => {
  const {navigation, workOrder} = props;
  const service = workOrder.services[0];
  const serviceIcon = handleBackstageServices(service.serviceId);
  return (
    <ListItem
      Component={TouchableOpacity}
      containerStyle={[
        styles.order_item,
        workOrder.orderStatus === 1 ||
        workOrder.orderStatus === 4 ||
        workOrder.orderStatus === 5 ||
        workOrder.orderStatus === 13
          ? {backgroundColor: '#CCC'}
          : null,
      ]}
      onPress={() => {
        if (
          workOrder.orderStatus !== 1 &&
          workOrder.orderStatus !== 5 &&
          workOrder.orderStatus !== 4 &&
          workOrder.orderStatus !== 13
        ) {
          navigation.navigate('OrderDetail', {
            workOrder: workOrder,
            additonalParent: 'OrderDetail',
            parent: 'Order',
          });
        }
      }}>
      <Avatar
        rounded
        source={serviceIcon}
        overlayContainerStyle={styles.leftAvatar_img}
      />
      <ListItem.Content>
        <ListItem.Title>
          <View style={styles.item_title_content}>
            <Text style={styles.item_title}>WO #{workOrder.orderId}</Text>
            <Text style={styles.item_title_right}>
              {moment(workOrder.dispatchTime).format('h:mm a')}
            </Text>
          </View>
        </ListItem.Title>
        <ListItem.Subtitle style={[styles.item_subtitle, {color: 'red'}]}>
          {workOrder.orderStatusName}
        </ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );
};
const styles = StyleSheet.create({
  order_item: {
    marginBottom: px2dp(24),
    marginLeft: px2dp(32),
    width: px2dp(686),
    backgroundColor: '#FFFFFF',
    borderRadius: px2dp(20),
  },
  item_title_content: {
    marginBottom: px2dp(14),
  },
  item_title: {
    fontSize: setSpText(32),
    fontWeight: '500',
    color: '#333333',
  },
  item_title_right: {
    fontSize: setSpText(28),
    color: '#9CA5B1',
  },
  item_subtitle: {
    fontWeight: '400',
    fontSize: setSpText(28),
  },
  sections_title: {
    fontSize: setSpText(28),
    color: 'rgba(153,153,153,1)',
    marginLeft: px2dp(32),
    marginBottom: scaleHeight(20),
  },
  leftAvatar_img: {
    backgroundColor: '#FFF',
  },
});
