import { combineReducers } from 'redux';
import auth from './+auth/reducer';
import post from './+post/reducer';
import common from './+common/reducer';
import users from './+users/reducer';

const rootReducer = combineReducers({
  common,
  auth,
  post,
  users,
});

export default rootReducer;

// use IRootState to set interface for the root reducer
// const { auth } = useSelector(( state: IRootState ) => state.auth);
export type IRootState = ReturnType<typeof rootReducer>;
