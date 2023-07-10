import {injectable} from 'inversify';
import { LocationService } from '../domain/LocationService';

@injectable()
export class RNLocationService implements LocationService {

    enableWatchLocation(): Promise<void> {
        throw new Error('Method not implemented.');
    }
    disableWatchLocation(): Promise<void> {
        throw new Error('Method not implemented.');
    }

}
