import React, {useState} from 'react';
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  ViewStyle,
  TextStyle,
} from 'react-native';
import {Text} from 'react-native-elements';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';

interface CustomButtonProps {
  // css
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  titleStyle?: TextStyle;
  disabledStyle?: ViewStyle | TextStyle;

  loading?: boolean;
  loadingProps?: ViewStyle | TextStyle;
  disabled?: boolean;
  disabledShadow?: boolean;

  titleRender?: React.ReactElement;
  title?: string;

  linearGradientProps?: LinearGradientProps;

  //
  asyncPress?: any;
  onPress?: () => void;

  // throttle
  throttle?: boolean;
  throttleOptions?: throttleOptions;
  children: any;
}

type throttleOptions = {
  wait?: number;
};

export default function CustomButton(this: any, props: CustomButtonProps) {
  const {linearGradientProps, throttle, throttleOptions, children} = props;

  const [loading, setLoading] = useState(false);

  const [throttleStatus, setThrottle] = useState<'pending' | 'full'>('pending');

  const defaultOnPress = () => {
    const {asyncPress, onPress} = props;
    if (props.loading || loading) {
      return;
    }
    if (asyncPress && typeof asyncPress === 'function') {
      if (props.loading === undefined) {
        setLoading(true);
      }
      const executeAsyncPress = asyncPress();

      if (
        executeAsyncPress &&
        executeAsyncPress.then &&
        typeof executeAsyncPress.then === 'function'
      ) {
        executeAsyncPress.finally(() => {
          if (props.loading === undefined) {
            setLoading(false);
          }
        });
      } else {
        if (props.loading === undefined) {
          setLoading(false);
        }

        // console.warn('customButton`s asyncPress must be a promise object');
      }
    } else if (onPress && typeof onPress === 'function') {
      // 加入节流 每次调用间隔1000毫秒
      if (throttle && throttleOptions) {
        // 启用函数节流
        const waitTime = Number.isFinite(throttleOptions.wait)
          ? throttleOptions.wait
          : 1000;
        if (throttleStatus === 'pending') {
          // 如有没有被限制，直接调用函数
          onPress();

          // 更新throttleStatus
          setThrottle('full');

          // 等待 waitTime 后 重置状态
          setTimeout(() => {
            setThrottle('pending');
          }, waitTime);
        }
      } else {
        onPress();
      }

      // onPress();
    } else {
      // console.warn('asyncPress and onPress must be a function');
    }
  };
  return (
    <View
      style={[
        props.disabledShadow
          ? null
          : {
              shadowColor: '#2D8DBC',
              shadowOffset: {width: 1, height: 10},
              shadowRadius: 10,
              shadowOpacity: 0.5,
            },
        props.containerStyle,
      ]}>
      {linearGradientProps ? (
        <ButtonContainerLinearGradient
          {...props}
          linearGradientProps={linearGradientProps}>
          <Button
            {...props}
            children={children}
            defaultOnPress={defaultOnPress}
            loading={props.loading || loading}
          />
        </ButtonContainerLinearGradient>
      ) : (
        <Button
          {...props}
          children={children}
          defaultOnPress={defaultOnPress}
          loading={props.loading || loading}
        />
      )}
    </View>
  );
}

interface ButtonProps extends CustomButtonProps {
  defaultOnPress: any;
}

const Button: React.FC<ButtonProps> = props => {
  const {loading, disabled, loadingProps, linearGradientProps, children} =
    props;

  const currentDisabled = loading || disabled;

  return (
    <TouchableOpacity
      onPress={props.defaultOnPress}
      disabled={currentDisabled}
      style={[
        props.disabledShadow
          ? null
          : {
              shadowColor: '#2D8DBC',
              shadowOffset: {width: 1, height: 10},
              shadowRadius: 10,
              shadowOpacity: 0.5,
            },
        props.buttonStyle,
        currentDisabled ? props.disabledStyle : null,
        // loading || disabled
        //   ? props.disabledStyle || {backgroundColor: 'rgba(255,255,255,0.1)',}
        //   : null,
      ]}>
      {loading ? (
        <ActivityIndicator
          color={linearGradientProps ? '#FFF' : 'rgba(49, 150, 193, 1)'}
          {...loadingProps}
        />
      ) : props.titleRender ? (
        props.titleRender
      ) : children ? (
        <View style={props.buttonStyle}>
          {children}
          <Text style={props.titleStyle}>{props.title}</Text>
        </View>
      ) : (
        <Text style={props.titleStyle}>{props.title}</Text>
      )}
    </TouchableOpacity>
  );
};

interface buttonContainerLinearGradientProps extends CustomButtonProps {
  linearGradientProps: LinearGradientProps;
}

const ButtonContainerLinearGradient: React.FC<
  buttonContainerLinearGradientProps
> = props => {
  const {linearGradientProps} = props;
  return (
    <LinearGradient {...linearGradientProps} style={[props.buttonStyle]}>
      {/* {props.titleRender ? (
        props.titleRender
      ) : (
        <View style={props.buttonStyle}>
          <Text style={props.titleStyle}>{props.title}</Text>
        </View>
      )} */}
      {props.children}
    </LinearGradient>
  );
};
