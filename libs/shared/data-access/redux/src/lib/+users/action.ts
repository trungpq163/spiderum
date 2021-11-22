import * as types from './type';
import { IGetTopUsers } from '@spiderum/shared/util/typing';

export const getTopUsersSuccess = (payload: IGetTopUsers) => ({
  type: types.GET_TOP_USERS_SUCCESS,
  payload,
});

export const setLoading = () => ({
  type: types.SET_USERS_LOADING,
});
