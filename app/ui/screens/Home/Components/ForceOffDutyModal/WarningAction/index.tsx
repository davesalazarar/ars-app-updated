import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from '../index.styles';
import ButtonAction from '../ButtonAction';

const WarningAction = ({onCloseModal, onDutyChange}: any) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.body}>
          <View style={styles.iconContainer}>
            <Image
              style={styles.icon}
              source={require('@/assets/modal/force_off_duty_warning_icon.png')}
            />
          </View>

          <Text style={[styles.text, styles.title]}>Missed Rescues</Text>

          <Text style={[styles.text, styles.description]}>
            Looks like you're missing a lot of rescues. If you're no longer
            available or need a breather, please mark yourself off-duty.
          </Text>

          <ButtonAction
            titles={['GOT IT', 'GO OFF-DUTY']}
            onCloseModal={onCloseModal}
            onDutyChange={onDutyChange}
          />

          <Text style={[styles.text, styles.info]}>
            Reach out to a Market Lead if you have questions.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default WarningAction;
