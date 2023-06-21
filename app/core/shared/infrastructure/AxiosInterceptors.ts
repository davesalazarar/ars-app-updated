import DeviceInfo from 'react-native-device-info';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {HOST, versionCode} from '@/core/shared/domain/Constants';
import {
  InvalidAppVersionError,
  InvalidCredentialsError,
  InvalidTokenError,
} from '../domain/Errors';

const systemName = DeviceInfo.getSystemName();
const systemVersion = DeviceInfo.getSystemVersion();
const version = DeviceInfo.getVersion();
const device = DeviceInfo.getDeviceId();
const brand = DeviceInfo.getBrand();

export const AxiosRequestconfiguration = async (config: any) => {
  let url = config.url;
  if (!url) {
    return config;
  }

  config.headers.Referer = HOST;
  config.headers.systemName = systemName;
  config.headers.systemVersion = systemVersion;
  config.headers.version = version;
  config.headers.device = device;
  config.headers.brand = brand;
  config.headers.versionCode = versionCode;
  //   config.headers.netInfo = netInfo;

  const token = await AsyncStorage.getItem('accessToken');

  if (!token) {
    return config;
  }

  config.headers.accessToken = `${token}`;
  return config;
};
export const axiosResponseConfiguration = async (res: any) => {
  if (!res.data) {
    throw new InvalidCredentialsError();
  }
  if (res.data && res.data.code) {
    const statusCode = res.data.code;
    ErrorValidator(statusCode);
  }
  return res;
};

const ErrorValidator = (errorCode: string) => {
  switch (errorCode) {
    case '999999':
      throw new InvalidAppVersionError();
    case '300000':
      throw new InvalidTokenError();
    default:
      break;
  }
};
