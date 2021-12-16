/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { getPostDetailsService } from '@spiderum/shared/util/service';
import { IGetPostDetails } from '@spiderum/shared/util/typing';
import { showNotification } from '@spiderum/shared/util/toast';

import { setLoading, getPostDetailsSuccess } from './action';

export const getPostDetails =
  (payload: IGetPostDetails) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getPostDetailsService(payload);
      if (result.data) {
        dispatch(getPostDetailsSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
