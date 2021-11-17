import * as types from './type';
import { IAuth } from '@spiderum/shared/util/typing';

export const loginSuccess = (payload: IAuth) => ({
  type: types.LOGIN_SUCCESS,
  payload,
});

export const loginFailure = () => ({
  type: types.LOGIN_FAILURE,
});

export const setLoading = () => ({
  type: types.SET_AUTH_LOADING,
});
