/* eslint-disable @typescript-eslint/no-explicit-any */
import produce from 'immer';
import { AnyAction } from 'redux';
import { removeUserToken } from '@spiderum/shared/util/auth';
import * as types from './type';

export interface IInitialState {
  isAuthenticated: boolean;
  currentUser: any;
  loading: boolean;
  logout: boolean;
}

const initialState: IInitialState = {
  isAuthenticated: false,
  currentUser: null,
  loading: false,
  logout: false,
};

const auth = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.LOGIN_SUCCESS:
        draft.isAuthenticated = true;
        draft.currentUser = action.payload;
        draft.loading = false;
        draft.logout = false;
        break;

      case types.LOGIN_FAILURE:
        draft.isAuthenticated = false;
        draft.currentUser = null;
        draft.loading = false;
        draft.logout = false;
        break;

      case types.SET_AUTH_LOADING:
        draft.loading = true;
        break;

      case types.LOGOUT_SUCCESS:
        draft.isAuthenticated = false;
        draft.currentUser = null;
        draft.loading = false;
        draft.logout = true;
        removeUserToken();
        break;

      default:
        break;
    }
  });
};

export default auth;
