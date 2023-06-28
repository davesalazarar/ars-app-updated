import {StyleSheet} from 'react-native';
import {
  px2dp,
  screenH,
  scaleHeight,
  setSpText,
  screenW,
} from '@/ui/utils/screenUtil';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: px2dp(50),
    height: screenH,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  login_img_container: {
    marginTop: scaleHeight(230), //230
    marginBottom: scaleHeight(126),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  login_img: {
    width: px2dp(260),
    height: scaleHeight(170),
  },
  login_title: {
    fontSize: setSpText(26),
    // lineHeight: px2dp(100),
    color: 'rgba(51,51,51,1)',
    marginBottom: scaleHeight(22),
    textAlign: 'left',
  },
  login_input: {
    // marginBottom: scaleHeight(68),
    // paddingHorizontal: px2dp(0),
  },
  forget: {
    fontSize: setSpText(26),
    color: 'rgba(45,141,188,1)',
    textAlign: 'center',
    marginTop: scaleHeight(40),
  },
  login_btn_container: {
    width: px2dp(650),
    height: scaleHeight(88),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 300,
    // marginTop: scaleHeight(56),
  },
  login_btn_text: {
    fontSize: setSpText(32),
    fontWeight: '500',
    color: 'rgba(255,255,255,1)',
  },
  button: {
    // backgroundColor: '#2D8DBC',
    // fontSize: setSpText(28),
    // fontWeight: 'bold',
    // textTransform: 'uppercase',
    // lineHeight: px2dp(90),
    // marginTop: px2dp(118),
    // height: px2dp(90),
    // borderRadius: 300,
    // overflow: 'hidden',
  },
  register: {
    fontSize: setSpText(28),
    position: 'absolute',
    bottom: scaleHeight(60),
  },
  textcontainer: {
    // width: screenW,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: px2dp(0),
  },
  version: {
    fontSize: setSpText(26),
    color: '#999999',
    marginTop: scaleHeight(65),
  },
  info: {
    fontSize: setSpText(26),
    color: '#333333',
    // marginTop:px2dp(22)
    paddingVertical: scaleHeight(20),
  },
  bottom: {
    position: 'absolute',
    bottom: scaleHeight(100),
    flexDirection: 'column',
    width: screenW,
  },
});
