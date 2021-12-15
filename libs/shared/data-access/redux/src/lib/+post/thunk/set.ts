/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import {
  savePostService,
  unSavePostService,
  votePostService,
} from '@spiderum/shared/util/service';
import { showNotification } from '@spiderum/shared/util/toast';
import { ISetPost, IVotePost } from '@spiderum/shared/util/typing';

import { actionSuccess } from '../../+common/action';

export const savePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const result: AxiosResponse<any> = await savePostService(payload);
      if (result.data) {
        dispatch(actionSuccess());
        showNotification({
          message: 'Save post successfully!',
          type: 'success',
        });
        return;
      }

      if (!result.data) {
        showNotification({
          message: 'Save post failed!',
          type: 'error',
        });
      }
    } catch (e) {
      if ((e as any)?.message === 'Request failed with status code 403') {
        showNotification({
          message: 'Bạn cần đăng nhập để lưu bài viết này',
          type: 'warning',
        });
        return;
      }
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const unSavePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const result: AxiosResponse<any> = await unSavePostService(payload);
      if (result.data) {
        dispatch(actionSuccess());
        return;
      }
    } catch (e) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const votePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const result: AxiosResponse<any> = await votePostService({
        ...payload,
        action: 2,
      } as IVotePost);

      if (result.data) {
        dispatch(actionSuccess());
        showNotification({
          message: 'Like bài viết thành công!',
          type: 'success',
        });
        return;
      }

      if (!result.data) {
        showNotification({
          message: 'Like bài viết thất bại!',
          type: 'error',
        });
      }
    } catch (e) {
      if ((e as any)?.message === 'Request failed with status code 403') {
        showNotification({
          message: 'Bạn cần đăng nhập để like bài viết này',
          type: 'warning',
        });
        return;
      }
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const unVotePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      const result: AxiosResponse<any> = await votePostService({
        ...payload,
        action: 1,
      } as IVotePost);

      if (result.data) {
        dispatch(actionSuccess());
        return;
      }
    } catch (e) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
