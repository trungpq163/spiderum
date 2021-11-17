/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-var-requires */
import { createStore, applyMiddleware } from 'redux';
import { HYDRATE, createWrapper } from 'next-redux-wrapper';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
};

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    // prevent duplicate calls to the hydrate reducer
    // for example: hydrate reducer is called twice
    // if there is a SSR hydration error
    // and the error is handled by the client
    // then the hydrate reducer is called again
    // and the state is hydrated again
    // which leads to an error
    // we can prevent this by checking if the state has changed
    // if it hasn't changed then we can just return the previous state
    // otherwise we can just return the new state
    // this is a hack, but it works
    // the real solution is to implement a proper reducer
    // and a proper redux store
    // and then we can remove this hack
    // and use the real reducer
    // and the real redux store
    // and then we can remove this hack
    // and use the real reducer
    // and the real redux store
    // FUCK SET_LOADING (If it is duplicated and used in many places, it will cause a bug)
    // => solution: use a new action type (SET_AUTH_LOADING, SET_POST_LOADING)
    // or use this "if (state.auth) nextState.auth = state.auth;"
    // don't duplicated OK -------------------------------
    if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};

const initStore = () => {
  return createStore(reducer, bindMiddleware([thunkMiddleware]));
};

export const wrapper = createWrapper(initStore, { debug: false });
