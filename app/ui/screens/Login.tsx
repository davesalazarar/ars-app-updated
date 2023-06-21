import * as React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {
  px2dp,
  screenH,
  scaleHeight,
  setSpText,
  screenW,
} from '@/ui/utils/screenUtil';
import CustomInput from '@/ui/components/CustomInput';
import CustomButton from '@/ui/components/CustomButton';
import {AuthContainer} from '@/core/auth/authContainer';
import {AuthLocator} from '@/core/auth/domain/AuthLocator';
import {LoginUseCase} from 'core/auth/application/LoginUseCase';
const logo = require('@/assets/logo.png');

const styles = StyleSheet.create({
  container: {
    // width: '100%',
    paddingHorizontal: px2dp(50),
    flex: 1,
    position: 'relative',
    height: screenH,
    // display: 'flex',
    // flexDirection: 'column',
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
    marginBottom: scaleHeight(68),
    paddingHorizontal: px2dp(0),
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

export default function Login() {
  const toLogin = async () => {
    const usecase = AuthContainer.get<LoginUseCase>(AuthLocator.LoginUseCase);
    usecase.login('david.salazar2@autorescuesolutions.com', 'aegon5targaryen');
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.login_img_container}>
          <Image source={logo} style={styles.login_img} resizeMode="contain" />
        </View>
        <Text>Account</Text>
        <CustomInput
          placeholder="Enter Your Account"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text>Password</Text>
        <CustomInput secureTextEntry={true} placeholder="Enter Your Password" />
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
          }}>
          <CheckBox
            title="Remember Me"
            containerStyle={{
              backgroundColor: 'white',
              borderColor: 'white',
              marginLeft: 0,
              paddingLeft: 0,
            }}
            textStyle={{
              fontSize: setSpText(26),
              color: 'rgba(51,51,51,1)',
              fontWeight: '300',
            }}
            iconType="material"
            checkedIcon="check-circle"
            uncheckedIcon="panorama-fish-eye"
            checkedColor="#2D8DBC"
          />
        </View>
        <CustomButton
          linearGradientProps={{
            start: {x: 0, y: 0.5},
            end: {x: 1, y: 0.5},
            colors: ['#48C7E0', '#2D8DBC'],
          }}
          buttonStyle={styles.login_btn_container}
          containerStyle={{
            marginTop: scaleHeight(56),
          }}
          title="SIGN IN"
          titleStyle={styles.login_btn_text}
          children={undefined}
          asyncPress={toLogin}
        />
        <TouchableOpacity>
          <Text style={styles.forget}>Forgot Password?</Text>
        </TouchableOpacity>
        <View style={styles.bottom}>
          <View style={[styles.textcontainer]}>
            <Text style={styles.version}>{'1.0.0'}</Text>
          </View>
          <View style={[styles.textcontainer]}>
            <Text style={styles.info}>
              Copyright © Auto Rescue | All Rights Reserved
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
