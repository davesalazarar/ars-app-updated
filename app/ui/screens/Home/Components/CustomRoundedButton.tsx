import * as React from 'react';
import {View, Text} from 'react-native';
import CustomButton from '@/ui/components/CustomButton';
import {scaleHeight} from '@/ui/utils/screenUtil';
import {styles} from '../Styles';

interface CustomRoundedButtonProps {
  isCheckIn: boolean;
}
export const CustomRoundedButton = (props: CustomRoundedButtonProps) => {
  return (
    <CustomButton
      linearGradientProps={{
        colors: props.isCheckIn
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
            {props.isCheckIn ? 'OFF-DUTY' : 'ON-DUTY'}
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
  );
};
