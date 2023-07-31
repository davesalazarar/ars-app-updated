import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {screenW, scaleHeight, setSpText, px2dp} from '@/ui/utils/screenUtil';

export const BillingItem = ({billing}: any) => {
  return (
    <View>
      <View style={styles.itemcontainer}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.header_text}>WO #{billing.orderId}</Text>
          </View>
          <View style={styles.body}>
            <View style={styles.body_item}>
              <Text style={styles.body_item_text_left} numberOfLines={1}>
                Basic Charges
              </Text>
              <Text style={styles.body_item_text_right} numberOfLines={1}>
                ${billing.driverPrice / 100}
              </Text>
            </View>
            <View style={styles.body_item}>
              <Text style={styles.body_item_text_left} numberOfLines={1}>
                Additional Charges
              </Text>
              <Text style={styles.body_item_text_right} numberOfLines={1}>
                ${billing.additionalPrice / 100}
              </Text>
            </View>
            <View style={styles.body_item}>
              <Text style={styles.body_item_text_left} numberOfLines={1}>
                Incentive
              </Text>
              <Text style={styles.body_item_text_right} numberOfLines={1}>
                ${billing.incentivePrice / 100}
              </Text>
            </View>
            <View style={styles.body_item}>
              <Text style={styles.body_item_text_left} numberOfLines={1}>
                OT Charges
              </Text>
              <Text style={styles.body_item_text_right} numberOfLines={1}>
                ${billing.otPrice / 100}
              </Text>
            </View>
            <View style={styles.body_item}>
              <Text style={styles.body_item_text_left} numberOfLines={1}>
                Increment
              </Text>
              <Text style={styles.body_item_text_right} numberOfLines={1}>
                ${billing.apIncrement / 100}
              </Text>
            </View>
          </View>
          <View style={styles.footer}>
            <Text style={styles.footer_text}>${billing.totalPrice / 100}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: screenW,
  },
  itemcontainer: {
    width: screenW,
    marginTop: scaleHeight(20),
    backgroundColor: '#FFF',
  },
  content: {
    width: '100%',
  },
  header: {
    width: '100%',
    height: scaleHeight(60),
    borderColor: '#ECECEC',
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  header_text: {
    fontSize: setSpText(24),
    color: 'rgba(123,135,150,1)',
    marginLeft: px2dp(32),
  },
  body: {
    width: '100%',
    height: scaleHeight(280),
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: scaleHeight(18),
  },
  body_item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  body_item_text_left: {
    width: px2dp(300),
    fontSize: setSpText(28),
    color: 'rgba(123,135,150,1)',
    marginLeft: px2dp(32),
  },
  body_item_text_right: {
    flex: 1,
    flexGrow: 1,
    fontSize: setSpText(28),
    textAlign: 'right',
    color: 'rgba(73,84,99,1)',
    marginRight: px2dp(32),
  },
  footer: {
    width: '100%',
    height: scaleHeight(68),
    borderColor: '#ECECEC',
    borderTopWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  footer_text: {
    fontSize: setSpText(32),
    color: 'rgba(45,141,188,1)',
    marginRight: px2dp(32),
  },
});
