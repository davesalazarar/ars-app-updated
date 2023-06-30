import {CheckBox} from '@rneui/base';
import * as React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomButton from '@/ui/components/CustomButton';
import {useUser} from '@/ui/hooks/user';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from './Styles';

export default function HomeScreen() {
  const {user} = useUser();
  const isCheckIn = true;
  const isAcceptingWOs = true;
  return (
    <SafeAreaView
      style={{
        flex: 1,
        display: 'flex',
      }}>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        // refreshControl={
        //   <RefreshControl refreshing={refreshing} onRefresh={this._onRefresh} />
        // }
        overScrollMode="always">
        <View style={styles.content}>
          <View style={styles.homeContainer}>
            <LinearGradient
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
              colors={['rgba(45,176,188,1)', 'rgba(0,137,206,1)']}>
              <View style={styles.homeHeader}>
                <View style={styles.homeHeader_content}>
                  <View>
                    <Text
                      style={styles.homeHeader_content_name}
                      numberOfLines={1}>
                      Hi, {user?.username}
                    </Text>
                  </View>
                  {/* {isCheckIn ? (
                    <TouchableOpacity
                      style={styles.homeHeader_content_location}
                      onPress={customLocation.updateCurrentPosition}>
                      <Icon
                        name="enviromento"
                        type="antdesign"
                        colors="rgba(255,255,255,1)"
                        iconStyle={iconStyle}
                      />
                      <Text
                        style={styles.homeHeader_content_location_text}
                        numberOfLines={1}>
                        {currentAddress
                          ? currentAddress
                          : 'Gathering position...'}
                      </Text>
                    </TouchableOpacity>
                  ) : null} */}
                </View>
              </View>
            </LinearGradient>

            <View style={styles.homeOrder}>
              <View style={styles.duty_container}>
                <CustomButton
                  linearGradientProps={{
                    colors: isCheckIn
                      ? ['#CCCCCC', '#CCCCCC']
                      : ['#189DC4', '#1DC7CF'],
                    start: {x: 0, y: 0.5},
                    end: {x: 1, y: 0.5},
                  }}
                  titleRender={
                    <View style={styles.duty_button_to}>
                      <Text style={[styles.duty_button_text]}>Go</Text>
                      <Text
                        style={[
                          styles.duty_button_text,
                          {marginTop: scaleHeight(20), fontWeight: '500'},
                        ]}>
                        {isCheckIn ? 'OFF-DUTY' : 'ON-DUTY'}
                      </Text>
                    </View>
                  }
                  containerStyle={styles.duty_button}
                  buttonStyle={styles.duty_button_to}
                  disabledShadow={true}
                  throttle
                  throttleOptions={{
                    wait: 1000,
                  }}
                  children={undefined}
                />

                {isCheckIn ? (
                  <View style={styles.duty_tip}>
                    <CheckBox
                      title="On-Duty & Receiving new work orders"
                      containerStyle={styles.duty_accepting_box}
                      checked={isAcceptingWOs}
                      textStyle={styles.duty_accepting_text}
                      iconType="material"
                      checkedIcon="check-box"
                      uncheckedIcon="check-box-outline-blank"
                    />
                  </View>
                ) : null}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
