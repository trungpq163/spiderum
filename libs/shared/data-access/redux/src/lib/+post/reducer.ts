import produce from 'immer';
import { AnyAction } from 'redux';

import * as types from './type';
import { IPostsInFeed } from '@spiderum/shared/util/typing';

export interface IInitialState {
  newPosts: IPostsInFeed | null;
  hotPosts: IPostsInFeed | null;
  controversialPosts: IPostsInFeed | null;
  topPosts: IPostsInFeed | null;
  loading: boolean;
}

const initialState: IInitialState = {
  newPosts: null,
  hotPosts: null,
  controversialPosts: null,
  topPosts: null,
  loading: false,
};

const postReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.GET_NEW_POSTS_SUCCESS:
      case types.GET_NEW_POSTS_IN_FEED_SUCCESS:
        draft.newPosts = action.payload;
        draft.loading = false;
        break;

      case types.GET_HOT_POSTS_SUCCESS:
      case types.GET_HOT_POSTS_IN_FEED_SUCCESS:
        draft.hotPosts = action.payload;
        draft.loading = false;
        break;

      case types.GET_CONTROVERSIAL_POSTS_SUCCESS:
      case types.GET_CONTROVERSIAL_POSTS_IN_FEED_SUCCESS:
        draft.controversialPosts = action.payload;
        draft.loading = false;
        break;

      case types.GET_TOP_POSTS_SUCCESS:
      case types.GET_TOP_POSTS_IN_FEED_SUCCESS:
        draft.topPosts = action.payload;
        draft.loading = false;
        break;

      case types.SET_POST_LOADING:
        draft.loading = true;
        break;

      default:
        break;
    }
  });
};

export default postReducer;
