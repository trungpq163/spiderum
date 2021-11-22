import { axiosInstance } from '@spiderum/shared/util/axios';
import { IGetTopUsers } from '@spiderum/shared/util/typing';

export const getTopUsersService = (data: IGetTopUsers) => {
  const { page = 1 } = data;

  const response = axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_V2_URL}/user/getTopUsers?page=${page}`
  );
  return response;
};
