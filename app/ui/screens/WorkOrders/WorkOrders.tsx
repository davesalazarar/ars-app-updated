import * as React from 'react';
import {useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import BillingTab from './BillingTab/BillingTab';
import WorkOrdersTab from './WorkOrdersTab/WorkOrdersTab';

const renderScene = SceneMap({
  wo: WorkOrdersTab,
  billing: BillingTab,
});

export default function WorkOrdersScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'wo', title: 'WORK ORDER'},
    {key: 'billing', title: 'BILLING'},
  ]);

  const renderTabBar = (props: any) => {
    return (
      <TabBar
        tabStyle={{backgroundColor: 'white'}}
        activeColor={'rgba(45,141,188,1)'}
        inactiveColor={'#999999'}
        {...props}
      />
    );
  };

  return (
    <TabView
      swipeEnabled={false}
      navigationState={{index, routes}}
      renderTabBar={renderTabBar}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
