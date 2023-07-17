import {WorkStatus, WorkStatusResponse} from './Driver';

export interface DriverRepository {
  setWorkStatus(status: WorkStatus): Promise<WorkStatusResponse>;
}
