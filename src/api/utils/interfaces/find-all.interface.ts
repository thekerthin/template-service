export interface IFindAll<T> {
  data: T[];
  metadata: {
    page: number;
    limit: number;
    total: number;
  }
}
