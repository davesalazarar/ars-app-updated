import * as Config from '../../../../app.config.json';
import {Platform} from 'react-native';
import appVersionData from '../domain/appVersion.json';

// Envs: dev, sit, uat, gate
export let env = Config.API_ENV || 'gate';

export const googleApiKey = Config.GOOGLE_MAPS_KEY;

const domainFromEnv = (environment: string) => {
  if (environment === 'uat' || environment === 'gate') {
    return 'ars';
  } else if (environment === 'dev') {
    return 'dev';
  }

  return 'tts';
};

const handleHostUrl = (environment: string) => {
  const domain = domainFromEnv(environment);

  return `https://${environment}.${domain}-janus.com`;
};

const handlesocketUrl = (environment: string) => {
  const domain = domainFromEnv(environment);

  return `https://${environment}-commu.${domain}-janus.com`;
};

export const versionCode = Platform.select({
  ios: () => appVersionData.ios_versionCode as any,
  android: () => appVersionData.android_versionCode as any,
  default: () => null,
})();

export const appVersion = Platform.select({
  ios: () => appVersionData.build_version_ios as any,
  android: () => appVersionData.build_version_android as any,
  default: () => null,
})();

export const HOST = handleHostUrl(env);

export const socket_url = handlesocketUrl(env);
