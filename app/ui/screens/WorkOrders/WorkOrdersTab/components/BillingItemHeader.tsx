import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './Styles';

export const BillingItemHeader = ({totalEarned, completedWO}: any) => {
  return (
    <View>
      <View style={styles.totalcontainer}>
        <View style={styles.total_content}>
          <View style={styles.total_item}>
            <Text style={styles.total_item_left}>Total Earned</Text>
            <Text
              style={[styles.total_item_right, {color: 'rgba(49,150,193,1)'}]}>
              {`$${totalEarned / 100 || 0}`}
            </Text>
          </View>
          <View style={styles.total_item}>
            <Text style={styles.total_item_left}>Completed WO</Text>
            <Text style={styles.total_item_right}>{completedWO || 0}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
