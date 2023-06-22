import * as React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {scaleHeight, setSpText} from '@/ui/utils/screenUtil';
import CustomInput from '@/ui/components/CustomInput';
import CustomButton from '@/ui/components/CustomButton';
import {AuthContainer} from '@/core/auth/authContainer';
import {AuthLocator} from '@/core/auth/domain/AuthLocator';
import {LoginUseCase} from '@/core/auth/application/LoginUseCase';
import {InvalidCredentialsError} from '@/core/shared/domain/Errors';
import Toast from 'react-native-root-toast';
import {useState} from 'react';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {SharedContainer} from '@/core/shared/sharedContainer';
import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {styles} from './Styles';

const logo = require('@/assets/logo.png');

export default function Login() {
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  React.useEffect(() => {
    const fetchData = async () => {
      const storage = SharedContainer.get<LoadUserValueUseCase>(
        SharedLocator.LoadGeneralStorageValueUseCase,
      );
      const data = await storage.load();
      if (data !== null) {
        setUsername(data.username);
        setPwd(data.password);
      }
    };
    fetchData();
  }, []);
  const toLogin = async () => {
    try {
      const usecase = AuthContainer.get<LoginUseCase>(AuthLocator.LoginUseCase);
      const data = await usecase.login(username, pwd);
      console.log(data);
    } catch (error) {
      if (error instanceof InvalidCredentialsError) {
        Toast.show(error.message);
      }
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.login_img_container}>
          <Image source={logo} style={styles.login_img} resizeMode="contain" />
        </View>
        <Text>Account</Text>
        <CustomInput
          value={username}
          placeholder="Enter Your Account"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={(text: string) => setUsername(text)}
        />
        <Text>Password</Text>
        <CustomInput
          value={pwd}
          secureTextEntry={true}
          placeholder="Enter Your Password"
          onChangeText={(text: string) => setPwd(text)}
        />
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
            iconType="material-community"
            checkedIcon="check-circle"
            uncheckedIcon="circle-o"
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
