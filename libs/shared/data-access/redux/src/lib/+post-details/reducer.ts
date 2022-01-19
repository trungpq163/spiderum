import produce from 'immer';
import { AnyAction } from 'redux';

import * as types from './type';
import { IPostDetails } from '@spiderum/shared/util/typing';

export interface IInitialState {
  postDetails: IPostDetails | null;
  loading: boolean;
}

const initialState: IInitialState = {
  postDetails: null,
  loading: false,
};

const postDetailsReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.GET_POST_DETAILS_SUCCESS:
        draft.postDetails = action.payload;
        draft.loading = false;
        break;

      case types.SET_POST_DETAILS_LOADING:
        draft.loading = true;
        break;

      default:
        break;
    }
  });
};

export default postDetailsReducer;
