export interface GeneralStorageRepository {
  load(key: string): Promise<string | null>;
  save(key: string, value: string): Promise<void>;
}
