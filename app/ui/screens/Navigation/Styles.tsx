import { StyleSheet } from "react-native";
import { px2dp, setSpText, scaleHeight } from "ui/utils/screenUtil";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    user_content: {
      width: '100%',
      height: px2dp(375),
    },
    header: {
      marginTop: px2dp(100),
      alignItems: 'center',
    },
    user_logo: {
      width: px2dp(120),
      height: px2dp(120),
    },
    user_name: {
      marginTop: px2dp(16),
      marginBottom: px2dp(100),
      color: '#495463',
      fontSize: setSpText(34),
    },
    logincontainer: {
      backgroundColor: 'rgba(255,255,255,1)',
      width: px2dp(510),
      height: scaleHeight(176),
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      position: 'absolute',
      bottom: scaleHeight(0),
    },
    login_button: {
      width: px2dp(450),
      height: scaleHeight(88),
      borderRadius: 45,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: scaleHeight(20),
    },
    login_button_text: {
      fontSize: setSpText(32),
      color: 'rgba(255,255,255,1)',
      fontWeight: '500',
    },
  })