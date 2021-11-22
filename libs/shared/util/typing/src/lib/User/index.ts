import { ObjectId } from '../index';

export interface ICreatorId {
  _id?: ObjectId;
  avatar?: string;
  display_name?: string;
  gravatar?: string;
  name?: string;
}

export interface IUser {
  _id?: ObjectId;
  avatar?: string;
  display_name?: string;
  followedByMe?: boolean;
  gravatar?: string;
  name?: string;
  total_score?: number;
}
