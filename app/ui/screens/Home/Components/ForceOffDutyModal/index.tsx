import React from 'react';
import useModal from '@/utils/useModal';
import {FORCE_OFF_DUTY_MODAL_ID} from '@/utils/constants';
import ForceOffDutyAction from './ForceOffDutyAction';
import WarningAction from './WarningAction';
import NavigationService from 'utils/navigation';

const {createModal, destroyModal} = useModal;
const FORCE_OFF_DUTY_ACTION = 'OFF_DUTY';
const WARNING_ACTION = 'WARNING';

const ForceOffDutyModal = ({onCloseModal, onDutyChange, action}: any) => {
  const goToPageByAction = () => {
    switch (action) {
      case FORCE_OFF_DUTY_ACTION:
        return (
          <ForceOffDutyAction
            onCloseModal={onCloseModal}
            onDutyChange={onDutyChange}
          />
        );
      case WARNING_ACTION:
        return (
          <WarningAction
            onCloseModal={onCloseModal}
            onDutyChange={onDutyChange}
          />
        );
      default:
        const actionErrorLog = `Force Off-Duty Action not found. The expected is ${FORCE_OFF_DUTY_ACTION} or ${WARNING_ACTION}, but was ${action}.`;
        console.error(actionErrorLog);
        break;
    }
  };

  return goToPageByAction();
};

const initModal = () => {
  const modalId = FORCE_OFF_DUTY_MODAL_ID;

  const show = (action: string, dutyChange: any) => {
    if (!isAllowedShowTheModal()) {
      return;
    }

    createModal({
      type: 'normal',
      modal: (
        <ForceOffDutyModal
          onCloseModal={closeModal}
          onDutyChange={dutyChange}
          action={action}
        />
      ),
      id: modalId,
    });
  };

  const closeModal = () => {
    destroyModal(modalId);
  };

  const isAllowedShowTheModal = () => {
    const navState = NavigationService.getCurrentNavState();
    const activeRouteName = NavigationService.getActiveRouteName(navState);
    const forbiddenRouteNames = ['Signature', 'PhotoInput'];
    return !forbiddenRouteNames.includes(activeRouteName);
  };

  return {show, closeModal};
};

export default initModal();
