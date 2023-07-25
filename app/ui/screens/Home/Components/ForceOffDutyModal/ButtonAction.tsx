import React from 'react';
import {StyleSheet} from 'react-native';
import NavigationService from '@/utils/navigation';
import CustomButton from '@/ui/components/CustomButton';
import {scaleHeight, setSpText} from 'ui/utils/screenUtil';

const ButtonAction = ({titles, onCloseModal, onDutyChange, action}: any) => {
  const renderOffDutyCustomButton = () => {
    return (
      <CustomButton
        containerStyle={styles.btn_container}
        onPress={() => {
          onCloseModal();
          NavigationService.navigate('Personal', {});
        }}
        title={titles[0]}
        titleStyle={styles.btn_text}
      />
    );
  };

  const renderWarningCustomButton = () => {
    return (
      <>
        <CustomButton
          containerStyle={styles.btn_container}
          onPress={() => onCloseModal()}
          title={titles[0]}
          titleStyle={styles.btn_text}
        />

        <CustomButton
          containerStyle={styles.btn_container}
          onPress={() => {
            onDutyChange();
            onCloseModal();
            NavigationService.navigate('Personal', {});
          }}
          title={titles[1]}
          titleStyle={styles.btn_text}
        />
      </>
    );
  };

  return (
    <>
      {action === 'OFF_DUTY'
        ? renderOffDutyCustomButton()
        : renderWarningCustomButton()}
    </>
  );
};

export default ButtonAction;

const styles = StyleSheet.create({
  btn_container: {
    marginTop: scaleHeight(30),
    width: '100%',
  },
  btn: {
    height: scaleHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(22, 152, 199, 1)',
  },
  btn_text: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: setSpText(32),
    fontWeight: 'bold',
  },
  btn_with_border: {
    borderColor: 'rgba(22, 152, 199, 1)',
    borderStyle: 'solid',
    borderWidth: 3,
    height: scaleHeight(100),
    justifyContent: 'center',
    alignItems: 'center',
  },
  extra_space_button: {
    marginBottom: 30,
  },
});
