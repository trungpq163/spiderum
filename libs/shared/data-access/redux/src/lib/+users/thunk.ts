/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { getTopUsersService } from '@spiderum/shared/util/service';
import { IGetTopUsers } from '@spiderum/shared/util/typing';
import { showNotification } from '@spiderum/shared/util/toast';

import { setLoading, getTopUsersSuccess } from './action';

export const getTopUsers =
  (payload: IGetTopUsers) => async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await getTopUsersService(payload);
      if (result.data) {
        dispatch(getTopUsersSuccess(result.data));
      }
    } catch (error) {
      showNotification({ message: 'Error', type: 'error' });
    }
  };
