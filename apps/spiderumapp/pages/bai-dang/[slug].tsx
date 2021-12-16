/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
// import { FeatureMain as HomeContainer } from '@spiderum/spiderumapp//';
import { FeatureMain as PostDetailsContainer } from '@spiderum/spiderumapp/post';
import { IRootState, wrapper } from '@spiderum/shared/data-access/redux';
import { IGetPostDetails } from '@spiderum/shared/util/typing';
import { getPostDetails } from '@spiderum/shared/data-access/redux';

const PostDetails: NextPage = (props) => {
  return <PostDetailsContainer />;
};

export default PostDetails;

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch, getState }) =>
    async ({ params, locale }) => {
      const { slug = '' } = params;
      const payload: IGetPostDetails = {
        slug: slug as string,
      };
      await dispatch(getPostDetails(payload));
      const { postDetails } = getState() as IRootState;
      if (!postDetails.postDetails) {
        return {
          notFound: true,
          props: {},
        };
      }
      return {
        props: {},
      };
    }
);
