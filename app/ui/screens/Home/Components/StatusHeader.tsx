import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from '@rneui/themed';
import {scaleHeight, screenW, px2dp, setSpText} from '@/ui/utils/screenUtil';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: scaleHeight(106),
    width: screenW,
  },
  itemcontainer: {
    flex: 1,
    width: px2dp(44),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  labelcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  onduty_avail_label: {
    fontSize: setSpText(36),
    color: 'rgba(107, 197, 17, 0.9)',
    fontWeight: 'bold',
  },
  onduty_unavail_label: {
    fontSize: setSpText(36),
    color: 'rgba(242, 127, 12, 0.9)',
    fontWeight: 'bold',
  },
  secondary_label: {
    fontSize: setSpText(20),
  },
  offduty_label: {
    fontSize: setSpText(36),
    color: 'rgba(240, 45, 45, 0.9)',
    fontWeight: 'bold',
  },
  messageicon: {
    marginRight: px2dp(40),
  },
  messageicon_badge: {
    position: 'absolute',
    right: px2dp(20),
    top: px2dp(-13),
    zIndex: 2,
  },
  chat: {},
});

interface StatusLabelProps {
  isCheckIn: boolean;
  isAcceptingWOs: boolean;
  locationUpdateSuccess: boolean;
}
const StatusLabel = (props: StatusLabelProps) => {
  const {isCheckIn, isAcceptingWOs, locationUpdateSuccess} = props;

  if (isCheckIn) {
    if (!locationUpdateSuccess) {
      return (
        <>
          <Text style={styles.onduty_unavail_label}>ON-DUTY</Text>
          <Text style={styles.secondary_label}>Location not detected</Text>
        </>
      );
    } else if (!isAcceptingWOs) {
      return (
        <>
          <Text style={styles.onduty_unavail_label}>ON-DUTY</Text>
          <Text style={styles.secondary_label}>
            Not receiving new work orders
          </Text>
        </>
      );
    } else {
      return <Text style={styles.onduty_avail_label}>ON-DUTY</Text>;
    }
  } else {
    return <Text style={styles.offduty_label}>OFF-DUTY</Text>;
  }
};

export default StatusLabel;
