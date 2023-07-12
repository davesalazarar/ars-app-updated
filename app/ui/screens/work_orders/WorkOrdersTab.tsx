import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from './Styles';

const noWorkorders = require('@/assets/no_workorders.png');

const _FilterList = [
  // {type: 'Available for Pick', key: 6},
  {type: 'New', key: 1},
  {type: 'Ongoing', key: 2},
  {type: 'Fee Submit', key: 3},
  {type: 'Pending', key: 4},
  {type: 'Paid', key: 5},
  {type: 'All', key: 0},
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
