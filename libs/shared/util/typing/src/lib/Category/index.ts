import { ObjectId } from '../index';

export interface ICategory {
  id?: ObjectId;
  name?: string;
  slug?: string;
}

export interface ICatId {
  id?: ObjectId;
  description?: string;
  name?: string;
  slug?: string;
}
