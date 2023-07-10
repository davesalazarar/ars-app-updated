import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {User} from '@/core/shared/domain/User';
import {SharedContainer} from '@/core/shared/sharedContainer';
import {SaveUserValueUseCase} from '@/core/shared/application/user/SaveUserValueUseCase';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {resetUser, saveUser} from '@/ui/redux/states/user';

export const useUser = () => {
  const user = useSelector((state: any) => state.user);
  const dispatcher = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const loadUser = async () => {
    setIsLoading(true);
    if (user.id !== 0) return user;
    const usecase = SharedContainer.get<LoadUserValueUseCase>(
      SharedLocator.LoadUserValueUseCase,
    );
    const data = await usecase.load();
    if (data.id !== 0) {
      dispatcher(saveUser(data));
    }
    setIsLoading(false);
  };
  const storeUser = async (data: User) => {
    setIsLoading(true);
    const usecase = SharedContainer.get<SaveUserValueUseCase>(
      SharedLocator.SaveUserValueUseCase,
    );
    await usecase.save(data);
    dispatcher(saveUser(data));
    setIsLoading(false);
  };
  const clearUser = () => {
    setIsLoading(true);
    dispatcher(resetUser());
    setIsLoading(false);
  };
  useEffect(() => {
    console.log('rendered');
    loadUser();
  }, []);
  return {user, isLoading, storeUser, clearUser};
};
