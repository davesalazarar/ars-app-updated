import {CurrentBillingOverviewResponse} from '@/core/work_orders/domain/WorkOrder';
import React from 'react';
import {FlatList} from 'react-native';
import {styles} from '../../Styles';
import {BillingItemHeader} from '../../WorkOrdersTab/components/BillingItemHeader';
import {BillingItem} from './BillingItem';

interface BillingListProps {
  billings: any[];
  billingOverview: CurrentBillingOverviewResponse;
}
export const BillingList = ({billings, billingOverview}: BillingListProps) => {
  return (
    <FlatList
      style={styles.work_order_list}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => BillingItemHeader({...billingOverview})}
      data={billings}
      onEndReachedThreshold={0.2}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) => {
        return <BillingItem workOrder={item} key={`${index}`} />;
      }}
    />
  );
};
