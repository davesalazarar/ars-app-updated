import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../index.styles';
import ButtonAction from '../ButtonAction';

const ForceOffDutyAction = ({onCloseModal, onDutyChange}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.body}>
          <Text style={[styles.text, styles.title]}>
            Still Accepting Rescues?
          </Text>

          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('@/assets/modal/force_off_duty_warning_icon.png')}
            />
          </View>

          <Text style={[styles.text, styles.description]}>
            Looks like you aren't accepting rescues right now. Mark on-duty when
            you're ready to start rescuing again!
          </Text>

          <ButtonAction
            titles={['GOT IT']}
            onCloseModal={onCloseModal}
            onDutyChange={onDutyChange}
            action="OFF_DUTY"
          />
        </View>
      </View>
    </View>
  );
};

export default ForceOffDutyAction;
