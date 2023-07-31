import {CheckBox, Image, Text} from '@rneui/base';
import moment from 'moment';
import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {
  decorateZip,
  getBoldStyles,
  handleBackstageServices,
  matchAlertColor_bg,
  matchAlertColor_text,
  MatchOrderStatusColor,
  showCreatedTime,
} from '@/ui/utils/styleUtils';
import {styles} from './Styles';

const locationIcon = require('@/assets/location.png');
const unselect = require('@/assets/payments/unselect.png');
const checked = require('@/assets/checked.png');

const exclusiveHeader = (show: boolean) => {
  if (show) {
    return (
      <View style={styles.exclusive_header}>
        <Text style={styles.exclusive_header_title}>EXCLUSIVE</Text>
      </View>
    );
  }

  return null;
};
export const WorkOrderItem = ({workOrder, filterType}: any) => {
  const orderStatusColor = MatchOrderStatusColor(workOrder.orderStatus);
  const alertContent = matchAlertColor_text(workOrder.etaAlert);

  const service = workOrder.services[0];
  const serviceIcon = handleBackstageServices(service.serviceId);
  const selectCheckOrder = false;
  const markedOffline = false;
  const exclusive = false;
  return (
    <View key={workOrder.key} style={styles.container}>
      {selectCheckOrder ? (
        <CheckBox
          containerStyle={styles.checkbox_container}
          checkedIcon={<Image style={styles.checkbox_icon} source={checked} />}
          uncheckedIcon={
            <Image
              style={styles.checkbox_icon}
              source={
                workOrder.orderStatus === 3 ||
                workOrder.orderStatus === 6 ||
                workOrder.orderStatus === 47
                  ? require('@/assets/unchecked.png')
                  : unselect
              }
            />
          }
          checked={false}
          onPress={() => {}}
        />
      ) : null}
      <TouchableOpacity onPress={() => {}}>
        <View
          style={[
            styles.itemcontainer,
            workOrder.orderStatus === 4 ||
            (workOrder.orderStatus === 1 && filterType != 6)
              ? {backgroundColor: '#CCC'}
              : null,
          ]}>
          {exclusiveHeader(exclusive)}
          <View style={styles.header}>
            <View style={styles.header_left}>
              {workOrder.services && workOrder.services[0] ? (
                <Image style={styles.header_img} source={serviceIcon} />
              ) : null}
            </View>
            <View style={styles.header_right}>
              <Text
                style={[
                  styles.header_right_id,
                  getBoldStyles(filterType, workOrder.orderStatus),
                ]}>{`WO ${workOrder.orderId}`}</Text>
              <Text
                style={[
                  styles.header_right_date,
                  getBoldStyles(filterType, workOrder.orderStatus),
                ]}>
                {workOrder.eta
                  ? moment().add(workOrder.eta, 'minute').format('HH:mm')
                  : showCreatedTime(workOrder.createTime)}
              </Text>
              <Text
                numberOfLines={2}
                style={[
                  styles.header_right_status,
                  orderStatusColor ? {color: orderStatusColor} : null,
                  getBoldStyles(filterType, workOrder.orderStatus),
                ]}>
                {filterType === 6 &&
                (workOrder.orderStatus === 1 ||
                  workOrder.orderStatus === 2 ||
                  workOrder.orderStatus === 5)
                  ? 'Pending'
                  : workOrder.orderStatusName}
              </Text>
              {markedOffline ? (
                <View style={styles.sync}>
                  <Text style={styles.sync_text}>Syncing</Text>
                </View>
              ) : null}
              <View style={styles.header_item_time}>
                {workOrder.etaAlert != null ? (
                  <View
                    style={[
                      styles.header_right_alert,
                      {
                        backgroundColor: matchAlertColor_bg(workOrder.etaAlert),
                      },
                    ]}>
                    <Text
                      style={[
                        styles.header_right_alert_text,
                        {color: alertContent.color},
                      ]}>
                      {alertContent.text}
                    </Text>
                  </View>
                ) : (
                  <Text
                    style={[
                      styles.header_right_time,
                      getBoldStyles(filterType, workOrder.orderStatus),
                    ]}>
                    {moment(workOrder.createTime).format('HH:mm')}
                  </Text>
                )}
              </View>
            </View>
          </View>
          {workOrder.endStatus ? null : workOrder.fullLocation ? (
            <View style={styles.footer}>
              <Image source={locationIcon} style={styles.footer_icon} />
              <Text style={styles.footer_location} numberOfLines={2}>
                {`${workOrder?.fullLocation}${decorateZip(workOrder?.zip)}`}
              </Text>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};
