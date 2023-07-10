import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {SharedContainer} from '@/core/shared/sharedContainer';
import {SaveUserValueUseCase} from '@/core/shared/application/user/SaveUserValueUseCase';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {offDuty, onDuty, resetUser, saveUser} from '@/ui/redux/states/user';
import {useLocation} from './location';

export const useUser = () => {
  const user = useSelector((state: any) => state.user);
  const dispatcher = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const {watchPosition, clearWatch} = useLocation();

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

  const clearUser = () => {
    dispatcher(resetUser());
  };

  const toggleDuty = () => {
    console.log('toggling duty');
    if (!user.onDuty) {
      watchPosition();
      dispatcher(onDuty());
    } else {
      clearWatch();
      dispatcher(offDuty());
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
  return {user, isLoading, storeUser, clearUser, toggleDuty};
};
