import {StyleSheet} from 'react-native';
import {px2dp, scaleHeight, setSpText} from '@/ui/utils/screenUtil';

export const styles = StyleSheet.create({
  order_content: {
    backgroundColor: '#F9F9F9',
    // paddingHorizontal: '4.27%',
    flex: 1,
    position: 'relative',
    // paddingTop: scaleHeight(40),
  },
  contentContainer: {
    // paddingBottom:px2dp(24)
    // height:scaleHeight(1000)
    paddingHorizontal: '4.27%',
  },
  filtercontainer: {
    height: scaleHeight(80),
    backgroundColor: '#FFF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  filter_item: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  filter_item_text: {
    color: 'rgba(51, 51, 51, 1)',
    fontSize: setSpText(28),
    //marginRight: px2dp(20),
  },
  icon: {
    fontSize: setSpText(28),
    marginLeft: px2dp(12),
  },
});
