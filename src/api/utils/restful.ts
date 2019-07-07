import { IFindAll } from './interfaces/find-all.interface';

const findAll = <T>({ data, page, limit, total }): IFindAll<T> => ({
  data,
  metadata: { page, limit, total }
});

export {
  findAll
}
