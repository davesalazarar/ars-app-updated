import * as React from 'react';
import {useWindowDimensions, View} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';

const FirstRoute = () => <View style={{flex: 1}} />;

const SecondRoute = () => <View style={{flex: 1}} />;
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

export default function WorkOrdersScreen() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
}
