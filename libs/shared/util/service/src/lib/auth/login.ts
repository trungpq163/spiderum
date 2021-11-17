import { AxiosPromise, AxiosRequestConfig } from 'axios';
import { axiosInstance } from '@spiderum/shared/util/axios';

export const loginService = (
  name: string,
  password: string
): AxiosPromise<unknown> => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_URL}/login`,
    data: JSON.stringify({
      name,
      password,
    }),
  };
  return axiosInstance(config);
};
