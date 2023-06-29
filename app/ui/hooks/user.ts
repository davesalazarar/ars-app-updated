import {LoadUserValueUseCase} from '@/core/shared/application/user/LoadUserValueUseCase';
import {SharedLocator} from '@/core/shared/domain/SharedLocator';
import {User} from '@/core/shared/domain/User';
import {SharedContainer} from '@/core/shared/sharedContainer';
import {SaveUserValueUseCase} from 'core/shared/application/user/SaveUserValueUseCase';
import {useState, useEffect} from 'react';

export const useUser = () => {
  const [user, setUser] = useState<User>();
  const getUser = async () => {
    const usecase = SharedContainer.get<LoadUserValueUseCase>(
      SharedLocator.LoadUserValueUseCase,
    );
    const data = await usecase.load();
    setUser(data);
  };
  const saveUser = async (data: User) => {
    const usecase = SharedContainer.get<SaveUserValueUseCase>(
      SharedLocator.SaveUserValueUseCase,
    );
    await usecase.save(data);
    setUser(data);
  };
  useEffect(() => {
    getUser();
  }, []);
  return {user, saveUser};
};
