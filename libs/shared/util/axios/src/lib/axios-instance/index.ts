/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getUserToken } from '@spiderum/shared/util/auth';

export const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config: any) => {
    const token = getUserToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (err) => {
    Promise.reject(err);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.status === 401) {
      window.location.replace(`${process.env.NEXT_PUBLIC_SPIDERUM_URL}/login`);
      return;
    }
    return Promise.reject(err);
  }
);

export default axiosInstance;
