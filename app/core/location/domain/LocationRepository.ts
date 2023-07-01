import {AddressResponse, AppLocation} from './AppLocation';

export interface LocationRepository {
  getCurrentAddress(location: AppLocation): Promise<AddressResponse>;
}
