/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import {
  savePostService,
  unSavePostService,
} from '@spiderum/shared/util/service';
import { showNotification } from '@spiderum/shared/util/toast';
import { ISetPost } from '@spiderum/shared/util/typing';

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
