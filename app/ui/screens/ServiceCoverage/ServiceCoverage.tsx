import {ListItem, Divider} from '@rneui/base';
import * as React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {px2dp, setSpText} from '@/ui/utils/screenUtil';
import {useMarketZones} from '@/ui/hooks/service';

const serviceImageData = [
  {
    title: 'Tire Change',
    text: 'Four-way lug wrench (impact gun, breaker bar, torque…',
    region: 'Service-Tire',
    type: 1,
  },
  {
    title: 'Tire Change',
    text: 'Minimum 2-ton floor jack',
    region: 'Service-Tire',
    type: 2,
  },
  {
    title: 'Tire Change',
    text: 'Mini air pump, or small air compressor',
    region: 'Service-Tire',
    type: 3,
  },
  {
    title: 'Fuel Delivery',
    text: 'Small 2-gallon fuel can',
    region: 'Service-Fuel',
    type: 1,
  },
  {
    title: 'Jump Start',
    text: 'Jump box or Set of Jumper Cables',
    region: 'Service-JumpStart',
    type: 1,
  },
  {
    title: 'Lockout',
    text: 'Lockout too kit',
    region: 'Service-Lockout',
    type: 1,
  },
];
const serviceSafetyData = [
  {title: 'Safety Vest', region: 'Service-Safety', type: 1},
  {title: 'Safety Goggles', region: 'Service-Safety', type: 2},
  {title: 'Safety Gloves', region: 'Service-Safety', type: 3},
  // { title: `Orange or Amber Dash Light`, region: `Service-Safety`, type: 4 },
  {title: 'Orange Dash Light', region: 'Service-Safety', type: 4},
  {
    title: 'Triangle / Flare kit or orange cones',
    region: 'Service-Safety',
    type: 5,
  },
  {
    title: 'Yellow/orange Dashboard Strobe Emergency Light',
    region: 'Service-Safety',
    type: 6,
  },
];
export default function ServiceCoverageScreen() {
  const {marketZones} = useMarketZones();

  return (
    <SafeAreaView style={styles.content}>
      <ScrollView>
        <View style={styles.info_content}>
          <ListItem containerStyle={styles.order_item}>
            <ListItem.Title>
              <View style={styles.item_title_content}>
                <Text style={styles.item_title_bold}>Service Zones</Text>
              </View>
            </ListItem.Title>
          </ListItem>
          {marketZones?.map(marketZone => {
            return (
              <View>
                <Divider style={{backgroundColor: '#ECECEC'}} />
                <ListItem containerStyle={styles.order_item}>
                  <ListItem.Title>
                    <View style={styles.item_title_content}>
                      <Text style={styles.item_title}>
                        {marketZone.marketName}
                      </Text>
                      <View style={styles.item_title_right_content}>
                        <Text
                          style={styles.item_title_right_content_text}
                          numberOfLines={1}
                          ellipsizeMode={'tail'}>
                          {marketZone.zoneNames.join(',')}
                        </Text>
                      </View>
                    </View>
                  </ListItem.Title>
                  <ListItem.Chevron />
                </ListItem>
              </View>
            );
          })}
        </View>
        <View style={styles.info_content}>
          <ListItem containerStyle={styles.order_item}>
            <ListItem.Title>
              <View style={styles.item_title_content}>
                <Text style={styles.item_title_bold}>Service Image</Text>
              </View>
            </ListItem.Title>
          </ListItem>
          {serviceImageData.map((item, index) => {
            return (
              <View key={index}>
                <Divider style={{backgroundColor: '#ECECEC'}} />
                <ListItem containerStyle={styles.order_item}>
                  <ListItem.Title>
                    <View style={styles.item_title_content}>
                      <View>
                        <Text style={styles.item_title}>{item.title}</Text>
                        <Text style={styles.item_title_info}>{item.text}</Text>
                      </View>
                    </View>
                  </ListItem.Title>
                </ListItem>
              </View>
            );
          })}
        </View>
        <View style={styles.info_content}>
          <ListItem containerStyle={styles.order_item}>
            <ListItem.Title>
              <View style={styles.item_title_content}>
                <Text style={styles.item_title_bold}>Service Safety</Text>
              </View>
            </ListItem.Title>
          </ListItem>

          {serviceSafetyData.map((item, index) => {
            return (
              <View key={index}>
                <Divider style={{backgroundColor: '#ECECEC'}} />
                <ListItem containerStyle={styles.order_item}>
                  <ListItem.Title>
                    <View style={styles.item_title_content}>
                      <View>
                        <Text style={styles.item_title}>{item.title}</Text>
                      </View>
                    </View>
                  </ListItem.Title>
                </ListItem>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: '#FAFAFA',
  },
  info_content: {
    marginTop: px2dp(24),
    backgroundColor: 'white',
    paddingHorizontal: px2dp(32),
  },
  order_item: {},
  item_title_content: {
    // marginBottom: px2dp(14),
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  item_title_bold: {
    fontSize: setSpText(36),
    fontWeight: 'bold',
    color: '#333333',
  },
  item_title: {
    fontSize: setSpText(28),
    fontWeight: '500',
    color: '#333333',
  },
  item_title_info: {
    fontSize: setSpText(24),
    fontWeight: '500',
    color: '#999999',
  },
  item_title_right: {
    position: 'absolute',
    top: px2dp(0),
    right: px2dp(-20),
    fontSize: setSpText(28),
    color: '#9CA5B1',
  },
  item_img_right: {
    // position: 'absolute',

    alignItems: 'center',
    top: px2dp(0),
    right: px2dp(10),
    width: px2dp(80),
    height: px2dp(80),
  },
  item_title_img: {
    width: '90%',
  },
  item_subtitle: {
    fontWeight: '400',
    fontSize: setSpText(28),
  },
  item_icon_right: {
    right: px2dp(-40),
    fontSize: setSpText(28),
    color: '#999999',
  },
  item_title_right_content: {
    // flexDirection: 'row',
    position: 'absolute',
    top: px2dp(0),
    right: px2dp(-10),
    width: px2dp(400),
    // maxWidth: px2dp(120),
  },
  item_title_right_content_text: {
    // marginRight: px2dp(10),
    // position: 'absolute',
    color: '#999999',
  },
});
