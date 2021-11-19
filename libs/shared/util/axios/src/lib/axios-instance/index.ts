/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';
import { getUserToken } from '@spiderum/shared/util/auth';

const axiosInstance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});

// Set default token for all requests
axiosInstance.defaults.headers.common[
  'Authorization'
] = `Bearer ${getUserToken()}`;

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

export { axiosInstance };
