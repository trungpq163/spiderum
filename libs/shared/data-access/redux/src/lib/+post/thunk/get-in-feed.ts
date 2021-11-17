/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { getPostsService } from '@spiderum/shared/util/service';
import { showNotification } from '@spiderum/shared/util/toast';
import { IGetPosts } from '@spiderum/shared/util/typing';

import {
  getHotPostsInFeedSuccess,
  getNewPostsInFeedSuccess,
  getControversialPostsInFeedSuccess,
  getTopPostsInFeedSuccess,
  setLoading,
} from '../action';

// User has logged in
export const getHotPostsInFeed =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
        isInFeed: true,
      });
      if (result.data) {
        dispatch(getHotPostsInFeedSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getNewPostsInFeed =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
        isInFeed: true,
      });
      if (result.data) {
        dispatch(getNewPostsInFeedSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getControversialPostsInFeed =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
        isInFeed: true,
      });
      if (result.data) {
        dispatch(getControversialPostsInFeedSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getTopPostsInFeed =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
      });
      if (result.data) {
        dispatch(getTopPostsInFeedSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
