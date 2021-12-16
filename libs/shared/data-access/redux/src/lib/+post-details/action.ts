import * as types from './type';
import { IGetPostDetails } from '@spiderum/shared/util/typing';

export const setLoading = () => ({
  type: types.SET_POST_DETAILS_LOADING,
});

export const getPostDetailsSuccess = (payload: IGetPostDetails) => ({
  type: types.GET_POST_DETAILS_SUCCESS,
  payload,
});
