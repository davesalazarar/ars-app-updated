import * as React from 'react';

import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from '../Styles';
import {FilterTypes, useTabWorkOrders} from '@/ui/hooks/workOrders';
import {WorkOrderList} from './components/WorkOrderList';

const noWorkorders = require('@/assets/no_workorders.png');

const _FilterList = [
  {type: 'New', key: FilterTypes.NEW},
  {type: 'Ongoing', key: FilterTypes.ONGOING},
  {type: 'Fee Submit', key: FilterTypes.FEE_SUBMIT},
  {type: 'Pending', key: FilterTypes.PENDING},
  {type: 'Paid', key: FilterTypes.PAID},
  {type: 'All', key: FilterTypes.ALL},
];
const FilterBadges = ({selectedFilterType, setSelectedFilterType}: any) => {
  return (
    <View style={styles.filtercontainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {_FilterList.map(item => {
          return (
            <View key={item.key} style={styles.filter_item}>
              <TouchableOpacity onPress={() => setSelectedFilterType(item.key)}>
                <View
                  style={[
                    styles.filter_item_text,
                    selectedFilterType === item.key
                      ? styles.selected_filter_item_text
                      : null,
                  ]}>
                  <Text
                    style={[
                      styles.filter_item_text_content,
                      selectedFilterType === item.key
                        ? styles.selected_filter_item_text_content
                        : null,
                    ]}>
                    {item.type}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

const NoWorkOrders = () => {
  return (
    <View style={[styles.emptycontainer, {marginTop: scaleHeight(212)}]}>
      <Image
        source={noWorkorders}
        style={styles.empty_img}
        resizeMode="contain"
      />
      <Text style={styles.empty_text}>No Work Orders</Text>
    </View>
  );
};

export default function WorkOrdersTab() {
  const {selectedFilterType, setSelectedFilterType, workOrders} =
    useTabWorkOrders();
  return (
    <View style={styles.body}>
      <FilterBadges
        selectedFilterType={selectedFilterType}
        setSelectedFilterType={setSelectedFilterType}
      />
      <View style={[styles.body_container]}>
        {workOrders.length === 0 ? (
          <NoWorkOrders />
        ) : (
          <WorkOrderList
            workOrders={workOrders}
            filterType={selectedFilterType}
          />
        )}
      </View>
    </View>
  );
}
