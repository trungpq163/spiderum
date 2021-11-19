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
import { setLoading } from '../action';

export const savePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await savePostService(payload);
      if (result.data) {
        dispatch(actionSuccess());
        return;
      }
    } catch (e) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };

export const unSavePost =
  (payload: ISetPost) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await unSavePostService(payload);
      if (result.data) {
        dispatch(actionSuccess());
        return;
      }
    } catch (e) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
