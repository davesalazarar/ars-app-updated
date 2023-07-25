import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {SharedContainer} from '@/core/shared/sharedContainer';
import {SaveUserValueUseCase} from '@/core/shared/application/user/SaveUserValueUseCase';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {offDuty, onDuty, resetUser, saveUser} from '@/ui/redux/states/user';
import {useLocation} from './location';
import {DriverContainer} from '@/core/driver/DriverContainer';
import {WorkStatus} from '@/core/driver/domain/Driver';
import {SetWorkStatusUseCase} from '@/core/driver/application/SetWorkStatusUseCase';
import {DriverLocator} from '@/core/driver/domain/DriverLocator';

export const useUser = () => {
  const user = useSelector((state: any) => state.user);
  const dispatcher = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {location, watchPosition, clearWatch} = useLocation();

  const storeUser = async (data: any) => {
    setIsLoading(true);
    const usecase = SharedContainer.get<SaveUserValueUseCase>(
      SharedLocator.SaveUserValueUseCase,
    );
    await usecase.save(data);
    const strData = JSON.stringify(data); //TODO: refactor - throws non-serializable error without this
    dispatcher(saveUser(JSON.parse(strData)));
    setIsLoading(false);
  };

  const setWorkStatus = async (workStatus: WorkStatus) => {
    setIsLoading(true);
    const usecase = DriverContainer.get<SetWorkStatusUseCase>(
      DriverLocator.SetWorkStatusUseCase,
    );
    await usecase.setWorkStatus(workStatus);
    setIsLoading(false);
  };
  const clearUser = () => {
    dispatcher(resetUser());
  };

  const toggleDuty = () => {
    try {
      if (!user.onDuty) {
        watchPosition();
        dispatcher(onDuty());
        setWorkStatus(WorkStatus.ON_DUTY);
      } else {
        clearWatch();
        dispatcher(offDuty());
        setWorkStatus(WorkStatus.OFF_DUTY);
      }
    } catch (error) {
      console.log('on duty error', error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      setIsLoading(true);
      if (user.id !== 0) {
        setIsLoading(false);
        return user;
      }
      const usecase = SharedContainer.get<LoadUserValueUseCase>(
        SharedLocator.LoadUserValueUseCase,
      );
      const data = await usecase.load();
      if (data.id !== 0) {
        dispatcher(saveUser(data));
      }
      setIsLoading(false);
    };
    loadUser();
  }, [dispatcher, user]);
  return {location, user, isLoading, storeUser, clearUser, toggleDuty};
};
