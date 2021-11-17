import * as types from '../type';
import { IGetPosts } from '@spiderum/shared/util/typing';

export const getHotPostsSuccess = (payload: IGetPosts) => ({
  type: types.GET_HOT_POSTS_SUCCESS,
  payload,
});

export const getNewPostsSuccess = (payload: IGetPosts) => ({
  type: types.GET_NEW_POSTS_SUCCESS,
  payload,
});

export const getTopPostsSuccess = (payload: IGetPosts) => ({
  type: types.GET_TOP_POSTS_SUCCESS,
  payload,
});

export const getControversialPostsSuccess = (payload: IGetPosts) => ({
  type: types.GET_CONTROVERSIAL_POSTS_SUCCESS,
  payload,
});
