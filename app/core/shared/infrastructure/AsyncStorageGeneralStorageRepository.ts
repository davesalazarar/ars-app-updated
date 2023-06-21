import {injectable} from 'inversify';
import {GeneralStorageRepository} from '../domain/GeneralStorageRepository';
import AsyncStorage from '@react-native-async-storage/async-storage';

@injectable()
export class AsyncStorageGeneralStorageRepository
  implements GeneralStorageRepository
{
  async load(key: string): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(key);
    } catch (e: any) {
      throw new Error(e);
    }
  }
  async save(key: string, value: string): Promise<void> {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e: any) {
      throw new Error(e);
    }
  }
}
