import * as React from 'react';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {scaleHeight} from '@/ui/utils/screenUtil';
import CustomInput from '@/ui/components/CustomInput';
import CustomButton from '@/ui/components/CustomButton';
import {AuthContainer} from '@/core/auth/authContainer';
import {AuthLocator} from '@/core/auth/domain/AuthLocator';
import {LoginUseCase} from '@/core/auth/application/LoginUseCase';
import {InvalidCredentialsError} from '@/core/shared/domain/Errors';
import Toast from 'react-native-root-toast';
import {useState} from 'react';
import {styles} from './Styles';
import {useUser} from '@/ui/hooks/user';

const logo = require('@/assets/logo.png');

export default function Login({navigation}: any) {
  const {storeUser} = useUser();
  const [username, setUsername] = useState('');
  const [pwd, setPwd] = useState('');

  const SignIn = async () => {
    try {
      if (!username || !pwd) {
        Toast.show('Please input email or password!');
      } else {
        const usecase = AuthContainer.get<LoginUseCase>(
          AuthLocator.LoginUseCase,
        );
        const data = await usecase.login(username, pwd);
        await storeUser(data);
      }
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
          asyncPress={SignIn}
        />
        <TouchableOpacity>
          <Text
            style={styles.forget}
            onPress={() => navigation.navigate('ForgotPassword')}>
            Forgot Password?
          </Text>
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
