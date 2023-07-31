import React from 'react';
import {FlatList} from 'react-native';
import {styles} from '../../Styles';
import {WorkOrderItem} from './WorkOrderItem';
import {WorkOrderItemGrab} from './WorkOrderItemGrab';

export const WorkOrderList = ({workOrders, filterType}: any) => {
  const sortItem = (item: any) => item?.layerIdentifier?.charAt(0) === 'E';
  const sort = (orders: any) =>
    orders.sort((a: any, b: any) => (sortItem(a) <= sortItem(b) ? 1 : -1));
  const sortHubData = (data: any) => (filterType === 1 ? sort(data) : data);
  return (
    <FlatList
      style={styles.work_order_list}
      showsVerticalScrollIndicator={false}
      data={sortHubData(workOrders)}
      onEndReachedThreshold={0.2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return filterType === 1 ? (
          <WorkOrderItemGrab workOrder={item} key={`${index}`} />
        ) : (
          <WorkOrderItem workOrder={item} key={`${index}`} />
        );
      }}
    />
  );
};
