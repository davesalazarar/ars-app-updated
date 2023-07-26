import * as React from 'react';

import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from './Styles';

const noWorkorders = require('@/assets/no_workorders.png');
enum FilterTypes {
  NEW = 1,
  ONGOING = 2,
  FEE_SUBMIT = 3,
  PENDING = 4,
  PAID = 5,
  ALL = 0,
}
const _FilterList = [
  {type: 'New', key: FilterTypes.NEW},
  {type: 'Ongoing', key: FilterTypes.ONGOING},
  {type: 'Fee Submit', key: FilterTypes.FEE_SUBMIT},
  {type: 'Pending', key: FilterTypes.PENDING},
  {type: 'Paid', key: FilterTypes.PAID},
  {type: 'All', key: FilterTypes.ALL},
];
const FilterBadges = () => {
  return (
    <View style={styles.filtercontainer}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {_FilterList.map(item => {
          return (
            <View key={item.key} style={styles.filter_item}>
              <TouchableOpacity onPress={() => {}}>
                <View style={[styles.filter_item_text]}>
                  <Text style={[styles.filter_item_text_content]}>
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
  return (
    <View style={styles.body}>
      <FilterBadges />
      <View style={[styles.body_container]}>
        <NoWorkOrders />
      </View>
    </View>
  );
}
