/* eslint-disable @typescript-eslint/no-explicit-any */
import { Dispatch } from 'react';
// import {
//   getPostsInFeed,
//   getAllPosts,
// } from '@spiderum/shared/data-access/redux';

interface IGetAPIForHomePage {
  dispatch: Dispatch<any>;
  hasUser?: boolean;
  type?: string;
  page?: number;
}

export const getAPIForHomePage = (data: IGetAPIForHomePage) => {
  const { dispatch, hasUser = false, type = 'hot', page = 1 } = data;

  // if (hasUser) {
  //   dispatch(getPostsInFeed({ page, type }));
  //   return;
  // }
  // dispatch(getAllPosts({ page, type }));
};
