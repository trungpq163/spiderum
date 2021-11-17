/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { getPostsService } from '@spiderum/shared/util/service';
import { IGetPosts } from '@spiderum/shared/util/typing';
import { showNotification } from '@spiderum/shared/util/toast';

import {
  setLoading,
  getHotPostsSuccess,
  getControversialPostsSuccess,
  getNewPostsSuccess,
  getTopPostsSuccess,
} from '../action';

// Guest
export const getHotPosts =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
      });
      if (result.data) {
        dispatch(getHotPostsSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getNewPosts =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
      });
      if (result.data) {
        dispatch(getNewPostsSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getControversialPosts =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
      });
      if (result.data) {
        dispatch(getControversialPostsSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const getTopPosts =
  (payload: IGetPosts) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostsService({
        payload,
      });
      if (result.data) {
        dispatch(getTopPostsSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
