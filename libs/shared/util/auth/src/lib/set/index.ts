/* eslint-disable @typescript-eslint/no-explicit-any */
import { IAuth } from '@spiderum/shared/util/typing';
import jwtDecode from 'jwt-decode';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setUserCookies = (token: string) => {
  try {
    const decoded: IAuth = jwtDecode(token);
    const { exp } = decoded;

    const timeNow = new Date().getTime();

    // 12 hours
    const shortExp = timeNow + 12 * 3600 * 1000;

    const expires = exp ? new Date(exp * 1000) : new Date(shortExp);

    cookies.set(process.env.NEXT_PUBLIC_TOKEN_KEY ?? '', token, {
      path: '/',
      expires,
    });
  } catch (err: any) {
    throw new Error(err);
  }
};
