import produce from 'immer';
import { AnyAction } from 'redux';

import * as types from './type';

export interface IInitialState {
  actionSuccess: boolean;
}

const initialState: IInitialState = {
  actionSuccess: false,
};

const commonReducer = (state = initialState, action: AnyAction) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case types.ACTION_SUCCESS:
        draft.actionSuccess = true;
        break;

      case types.RESET_ACTION:
        draft.actionSuccess = false;
        break;

      default:
        break;
    }
  });
};

export default commonReducer;
