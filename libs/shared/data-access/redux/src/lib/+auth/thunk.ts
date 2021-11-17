/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { AnyAction, Dispatch } from 'redux';

import { getUserInfo, setUserCookies } from '@spiderum/shared/util/auth';
import { loginService } from '@spiderum/shared/util/service';
import { showNotification } from '@spiderum/shared/util/toast';

import { loginFailure, loginSuccess, setLoading } from './action';

export const handleLogin =
  (email: string, password: string) =>
  async (dispatch: Dispatch<AnyAction>) => {
    try {
      dispatch(setLoading());
      const result: AxiosResponse<any> = await loginService(email, password);

      const userInfo = getUserInfo(result.data);

      if (userInfo.id) {
        setUserCookies(result.data);
        dispatch(loginSuccess(userInfo));
        showNotification({ message: 'Login successfully', type: 'success' });
        return;
      }

      if (!userInfo.id) {
        dispatch(loginFailure());
        showNotification({
          message: 'Wrong password or username',
          type: 'error',
        });
        return;
      }
    } catch (error) {
      dispatch(loginFailure());
      console.log('err', error);
      showNotification({ message: 'Error', type: 'error' });
    }
  };
