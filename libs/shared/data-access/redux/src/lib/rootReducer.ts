import { combineReducers } from 'redux';
import auth from './+auth/reducer';
import post from './+post/reducer';
import common from './+common/reducer';
import users from './+users/reducer';
import postDetails from './+post-details/reducer';

const rootReducer = combineReducers({
  common,
  auth,
  post,
  users,
  postDetails,
});

export default rootReducer;

// use IRootState to set interface for the root reducer
// const { auth } = useSelector(( state: IRootState ) => state.auth);
export type IRootState = ReturnType<typeof rootReducer>;
