import produce from 'immer';
import { AnyAction } from 'redux';

import * as types from './type';
import { IUser } from '@spiderum/shared/util/typing';

export interface IInitialState {
  hotMembers: IUser[] | null;
  loading: boolean;
}

const initialState: IInitialState = {
  hotMembers: null,
  loading: false,
};

const usersReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.GET_TOP_USERS_SUCCESS:
        draft.hotMembers = action.payload;
        draft.loading = false;
        break;

      case types.SET_USERS_LOADING:
        draft.loading = true;
        break;

      default:
        break;
    }
  });
};

export default usersReducer;
