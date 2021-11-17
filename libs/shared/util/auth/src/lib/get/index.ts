/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';
import { IAuth } from '@spiderum/shared/util/typing';

const cookies = new Cookies();

export const getUserToken = () => {
  if (process.env.NEXT_PUBLIC_TOKEN_KEY)
    return cookies.get(process.env.NEXT_PUBLIC_TOKEN_KEY);
};

export const getUserInfoWithToken = (): IAuth => {
  const token = getUserToken();
  if (!token) {
    return {};
  }
  const decoded: IAuth = jwtDecode(token);
  return decoded;
};

export const getUserInfo = (token: string): IAuth => {
  try {
    const decoded: IAuth = jwtDecode(token);
    return decoded;
  } catch (e) {
    return {};
  }
};
