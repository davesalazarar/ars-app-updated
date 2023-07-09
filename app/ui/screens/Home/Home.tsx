import {CheckBox} from '@rneui/base';
import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useUser} from '@/ui/hooks/user';
import {styles} from './Styles';
import {CustomRoundedButton} from './Components/CustomRoundedButton';
import {Icon} from '@rneui/themed';

export default function HomeScreen() {
  const {user} = useUser();
  const currentAddress = '';
  const isOnDuty = user.onDuty;
  const isAcceptingWOs = user.isAcceptingWOs;
  return (
    <SafeAreaView style={styles.safeAareaStyle}>
      <ScrollView
        contentContainerStyle={styles.containerStyle}
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
                  {isOnDuty ? (
                    <TouchableOpacity
                      style={styles.homeHeader_content_location}>
                      <Icon
                        name="enviromento"
                        type="antdesign"
                        color="rgba(255,255,255,1)"
                        iconStyle={styles.iconStyle}
                      />
                      <Text
                        style={styles.homeHeader_content_location_text}
                        numberOfLines={1}>
                        {currentAddress
                          ? currentAddress
                          : 'Gathering position...'}
                      </Text>
                    </TouchableOpacity>
                  ) : null}
                </View>
              </View>
            </LinearGradient>

            <View style={styles.homeOrder}>
              <View style={styles.duty_container}>
                <CustomRoundedButton
                  onDutyHandle={() => {}}
                  isOnDuty={isOnDuty}
                />
                {isOnDuty ? (
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
