import React, {useState} from 'react';
import {Input, Icon} from 'react-native-elements';
import {StyleSheet} from 'react-native';
import {setSpText} from '@/ui/utils/screenUtil';

export default function CustomInput(props: any) {
  const {
    onBlur,
    onFocus,
    autoFocus,
    inputContainerStyle,
    containerStyle,
    inputStyle,
    showCurrency,
    placeholderTextColor,
  } = props;
  const [isFocus, setFocus] = useState(autoFocus || false);
  return (
    <Input
      {...props}
      containerStyle={[{paddingHorizontal: 0}, containerStyle]}
      leftIcon={
        showCurrency && (
          <Icon
            name="dollar-sign"
            type="feather"
            iconStyle={{
              fontSize: setSpText(30),
            }}
          />
        )
      }
      inputContainerStyle={[
        styles.unfoucs,
        isFocus ? styles.isfocus : null,
        inputContainerStyle,
      ]}
      inputStyle={[{fontSize: setSpText(32)}, inputStyle]}
      placeholderTextColor={placeholderTextColor || '#CCCCCC'}
      onFocus={() => {
        setFocus(true);
        if (onFocus) {
          onFocus();
        }
      }}
      onBlur={() => {
        setFocus(false);
        if (onBlur) {
          onBlur();
        }
      }}
    />
  );
}

const styles = StyleSheet.create({
  unfoucs: {
    borderBottomColor: '#E2E6EB',
    borderBottomWidth: 1,
  },
  isfocus: {
    borderBottomColor: '#2D8DBC',
  },
});
