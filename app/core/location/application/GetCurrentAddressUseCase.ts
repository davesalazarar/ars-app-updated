import {AddressResponse, AppLocation} from '@/core/location/domain/AppLocation';
import {LocationLocator} from '@/core/location/domain/LocationLocator';
import {LocationRepository} from '@/core/location/domain/LocationRepository';
import {inject, injectable} from 'inversify';

@injectable()
export class GetCurrentAddressUseCase {
  private _repository: LocationRepository;

  constructor(
    @inject(LocationLocator.LocationRepository) repository: LocationRepository,
  ) {
    this._repository = repository;
  }

  async getCurrentAddress(
    longitude: string,
    latitude: string,
  ): Promise<AddressResponse> {
    const location: AppLocation = {longitude, latitude};
    return await this._repository.getCurrentAddress(location);
  }
}
