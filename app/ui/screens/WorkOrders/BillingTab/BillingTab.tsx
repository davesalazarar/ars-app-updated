import React from 'react';
import {Image, Text, View} from 'react-native';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from '../Styles';
import {useTabBilling} from '@/ui/hooks/workOrders';
import {BillingList} from './components/BillingList';

const noBilings = require('@/assets/no_billings.png');

const NoBillings = () => {
  return (
    <View style={[styles.emptycontainer, {marginTop: scaleHeight(212)}]}>
      <Image source={noBilings} style={styles.empty_img} resizeMode="contain" />
      <Text style={styles.empty_text}>No Work Orders</Text>
    </View>
  );
};
export default function BillingTab() {
  const {billingOverview, billings} = useTabBilling();
  return (
    <View style={styles.body}>
      <View style={[styles.body_container]}>
        {billings.length === 0 ? (
          <NoBillings />
        ) : (
          <BillingList billings={billings} billingOverview={billingOverview} />
        )}
      </View>
    </View>
  );
}
