import { axiosInstance } from '@spiderum/shared/util/axios';
import { IGetPosts } from '@spiderum/shared/util/typing';

export interface IGetPostsService {
  payload: IGetPosts;
  isInFeed?: boolean;
}

export const getPostsService = (data: IGetPostsService) => {
  const {
    payload: { page = 1, type = 'hot' },
    isInFeed = false,
  } = data;

  if (isInFeed) {
    const response = axiosInstance.get(
      `${process.env.NEXT_PUBLIC_API_V1_URL}/feed/getPostsInFeed?type=${type}&page=${page}`
    );
    return response;
  }

  const response = axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_V1_URL}/feed/getAllPosts?type=${type}&page=${page}`
  );
  return response;
};
