import jwtDecode from 'jwt-decode';
import { IAuth } from '@spiderum/shared/util/typing';
import { getUserToken } from '../get';
import { removeUserToken } from '../remove';

export const isLoggedIn = (): boolean => {
  const userToken = getUserToken();
  if (userToken) {
    return true;
  }
  return false;
};

export const isAuthenticated = (): boolean => {
  if (!isLoggedIn()) {
    return false;
  }

  try {
    const decoded: IAuth = jwtDecode(getUserToken());
    // Original Response
    // https://stackoverflow.com/questions/54884488/how-can-i-solve-the-error-ts2532-object-is-possibly-undefined
    if (decoded.exp && decoded.exp < Date.now() / 1000) {
      removeUserToken();
      return false;
    }
    return true; // Token is valid
  } catch (err) {
    removeUserToken();
    return false;
  }
};
