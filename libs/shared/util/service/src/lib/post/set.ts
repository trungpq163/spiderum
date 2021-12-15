import { AxiosRequestConfig } from 'axios';
import { axiosInstance } from '@spiderum/shared/util/axios';
import { ISetPost, IVotePost } from '@spiderum/shared/util/typing';

export const savePostService = (data: ISetPost) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_URL}/relation/user-post/save`,
    data: JSON.stringify(data),
  };
  const response = axiosInstance(config);
  return response;
};

export const unSavePostService = (data: ISetPost) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_URL}/relation/user-post/unsave`,
    data: JSON.stringify(data),
  };
  const response = axiosInstance(config);
  return response;
};

export const votePostService = (data: IVotePost) => {
  const config: AxiosRequestConfig = {
    method: 'post',
    url: `${process.env.NEXT_PUBLIC_API_URL}/relation/user-post/vote`,
    data: JSON.stringify(data),
  };
  const response = axiosInstance(config);
  return response;
};
