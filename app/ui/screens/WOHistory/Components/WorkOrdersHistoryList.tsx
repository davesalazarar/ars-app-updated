import {Image} from '@rneui/themed';
import React from 'react';

import {SectionList, StyleSheet, Text, View} from 'react-native';
import {px2dp, scaleHeight, screenW, setSpText} from '@/ui/utils/screenUtil';
import {WorkOrderHistoryItem} from './WorkOrderHistoryItem';

const renderItemSeparator = () => <View />;

const renderSectionHeader = (sections: any) => {
  return (
    <View>
      <Text style={styles.sections_title}>{sections.section.title}</Text>
    </View>
  );
};
export const WorkOrdersHistoryList = ({workOrders}: any) => {
  const no_order = require('@/assets/no_workorders.png');
  const list =
    workOrders.length === 0 ? (
      <View style={styles.no_order}>
        <Image source={no_order} style={styles.no_order_img} />
        <Text style={styles.no_order_title}>No Work Orders</Text>
      </View>
    ) : (
      <SectionList
        style={{
          marginTop: scaleHeight(24),
        }}
        sections={workOrders}
        initialNumToRender={10}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        onEndReachedThreshold={0.2}
        renderSectionHeader={renderSectionHeader}
        renderItem={({item}) => {
          return <WorkOrderHistoryItem workOrder={item} />;
        }}
        ItemSeparatorComponent={renderItemSeparator}
        stickySectionHeadersEnabled={false}
      />
    );
  return list;
};

const styles = StyleSheet.create({
  no_order: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
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
    position: 'absolute',
    top: px2dp(0),
    right: px2dp(0),
    fontSize: setSpText(28),
    color: '#9CA5B1',
  },
  item_subtitle: {
    fontWeight: '400',
    fontSize: setSpText(28),
  },
  no_order_img: {
    width: px2dp(390), //390
    height: scaleHeight(300), //300
  },
  no_order_title: {
    color: '#333333',
    fontSize: setSpText(32),
    marginTop: px2dp(100),
  },
  confirmcontainer: {
    // position: 'absolute',
    // bottom:0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: screenW,
    backgroundColor: 'rgba(255,255,255,1)',
    height: scaleHeight(130),
  },
  confirmButtoncontainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButton: {
    width: px2dp(690),
    height: scaleHeight(90),
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
