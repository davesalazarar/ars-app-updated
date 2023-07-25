import {StyleSheet} from 'react-native';
import {screenH, screenW, px2dp, scaleHeight} from 'ui/utils/screenUtil';

const styles = StyleSheet.create({
  container: {
    height: screenH,
    width: screenW,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  content: {
    width: px2dp(700),
    marginBottom: 50,
  },
  body: {
    backgroundColor: 'rgba(75, 74, 74, 1)',
    paddingHorizontal: px2dp(55),
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
  },
  icon: {
    width: scaleHeight(350),
    height: scaleHeight(350),
    marginBottom: 20,
  },
  iconContainer: {
    width: scaleHeight(400),
    height: scaleHeight(400),
    backgroundColor: 'rgba(22, 152, 199, 1)',
    borderRadius: 500,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: scaleHeight(60),
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    marginBottom: scaleHeight(60),
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
  },
  info: {
    fontSize: 18,
    fontStyle: 'italic',
    marginTop: scaleHeight(60),
  },
});

export default styles;
