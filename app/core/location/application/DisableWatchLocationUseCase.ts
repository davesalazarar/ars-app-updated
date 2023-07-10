import {LocationLocator} from '@/core/location/domain/LocationLocator';
import {inject, injectable} from 'inversify';
import { LocationService } from '../domain/LocationService';

@injectable()
export class DisableWatchLocationUseCase {
  private _service: LocationService;

  constructor(
    @inject(LocationLocator.LocationService) service: LocationService,
  ) {
    this._service = service;
  }

  async DisableWatchLocation(): Promise<void> {
    return await this._service.disableWatchLocation();
  }
}
