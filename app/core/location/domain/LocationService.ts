export interface LocationService {
  enableWatchLocation(): Promise<void>;
  disableWatchLocation(): Promise<void>;
}
