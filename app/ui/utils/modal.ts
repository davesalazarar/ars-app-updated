import RootSiblings from 'react-native-root-siblings';
import {
  EXCLUSIVE_MODAL_ID,
  FORCE_OFF_DUTY_MODAL_ID,
  POOL_MODAL_ID,
} from 'ui/utils/constants';

interface element {
  type: string;
  modal: JSX.Element;
  id: number | string;
  // waitPop?: boolean;
  sibling?: RootSiblings;
}

export function useModal() {
  let modals: Array<any> = [];
  let modalOpen = false;

  let createModal = (modal: element, woLayerIdentifier?: string) => {
    let modalExists = checkModalExists(modal);

    if (!modalExists) {
      let newModal = {...modal};

      if (!modalOpen) {
        newModal.sibling = new RootSiblings(modal.modal);

        modalOpen = true;

        modals.push(newModal);
      } else {
        handlePriority(modal, woLayerIdentifier);
      }
    }
  };

  let checkModalExists = (modal: element) => {
    let flag = false;

    for (let index = 0; index < modals.length; index++) {
      const ele = modals[index];
      if (ele.id && ele.id == modal.id) {
        flag = true;
        break;
      }
    }
    return flag;
  };

  let destroyModal = (id: string | number) => {
    return new Promise((resolve, _reject) => {
      const currentElement = modals.shift();
      if (currentElement && currentElement.id === id) {
        currentElement.sibling.destroy(() => {
          let nextModal = modals.shift();
          modalOpen = false;
          if (nextModal) {
            createModal(nextModal);
          } else {
            modalOpen = false;
          }
          resolve(true);
        });
      } else {
        resolve(true);
      }
    });
  };

  const handlePriority = async (
    incomingModal: element,
    woLayerIdentifier?: string,
  ) => {
    const openModal = findOpenModal();

    if (
      (woLayerIdentifier === 'F1' && isForceOffDutyModal(openModal)) ||
      isForceOffDutyModal(incomingModal) ||
      (isPoolModal(openModal) && isExclusiveModal(incomingModal))
    ) {
      await destroyModal(openModal.id);
      createModal(incomingModal);
    }
  };

  const isPoolModal = (modal: element) => {
    return modal.id === POOL_MODAL_ID;
  };

  const isExclusiveModal = (modal: element) => {
    return modal.id === EXCLUSIVE_MODAL_ID;
  };

  const isForceOffDutyModal = (modal: element) =>
    modal.id === FORCE_OFF_DUTY_MODAL_ID;

  let findOpenModal = () => {
    return modals.length ? modals[0] : null;
  };

  return {createModal, destroyModal};
}
