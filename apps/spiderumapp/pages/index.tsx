/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { FeatureMain as HomeContainer } from '@spiderum/spiderumapp//home';
import { wrapper } from '@spiderum/shared/data-access/redux';

const HomePage: NextPage = (props) => {
  console.log('props', props);
  return <HomeContainer />;
};

export default HomePage;

// export const getStaticProps = wrapper.getStaticProps(
//   ({ dispatch }) =>
//     async ({ params }) => {
//       await dispatch(
//         getPostsInFeed({ page: (params?.page_idx as any) || 1, type: 'hot' })
//       );
//       return {
//         props: {
//           params: 1,
//         },
//       };
//     }
// );
