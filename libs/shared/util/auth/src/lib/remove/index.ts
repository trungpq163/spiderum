/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const removeUserToken = () => {
  if (process.env.NEXT_PUBLIC_TOKEN_KEY)
    return cookies.remove(process.env.NEXT_PUBLIC_TOKEN_KEY, { path: '/' });
};
