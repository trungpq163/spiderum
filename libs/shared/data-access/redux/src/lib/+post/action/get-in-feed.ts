import * as types from '../type';
import { IGetPosts } from '@spiderum/shared/util/typing';

export const getHotPostsInFeedSuccess = (payload: IGetPosts) => ({
  type: types.GET_HOT_POSTS_IN_FEED_SUCCESS,
  payload,
});

export const getNewPostsInFeedSuccess = (payload: IGetPosts) => ({
  type: types.GET_NEW_POSTS_IN_FEED_SUCCESS,
  payload,
});

export const getControversialPostsInFeedSuccess = (payload: IGetPosts) => ({
  type: types.GET_CONTROVERSIAL_POSTS_IN_FEED_SUCCESS,
  payload,
});

export const getTopPostsInFeedSuccess = (payload: IGetPosts) => ({
  type: types.GET_TOP_POSTS_IN_FEED_SUCCESS,
  payload,
});
