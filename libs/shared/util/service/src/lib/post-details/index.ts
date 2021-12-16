import { axiosInstance } from '@spiderum/shared/util/axios';
import { IGetPostDetails } from '@spiderum/shared/util/typing';

export const getPostDetailsService = ({ slug }: IGetPostDetails) => {
  const response = axiosInstance.get(
    `${process.env.NEXT_PUBLIC_API_URL}/post-details/${slug}`
  );
  return response;
};
