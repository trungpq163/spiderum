/* eslint-disable react-hooks/exhaustive-deps */
import { Container, Banner } from './feature-main.styles';
import { Link } from '@spiderum/shared/ui';
import { ROUTE } from '@spiderum/shared/util/route';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  IRootState,
  getHotPosts,
  getHotPostsInFeed,
  getNewPosts,
  getNewPostsInFeed,
  getTopPosts,
  getTopPostsInFeed,
  getControversialPosts,
  getControversialPostsInFeed,
} from '@spiderum/shared/data-access/redux';
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { AllForYou } from './components/all-for-you/all-for-you';
import { BestArticlesOfTheMonth } from './components/best-articles-of-the-month/best-articles-of-the-month';
import { HotMembers } from './components/hot-members/hot-members';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { useState } from 'react';

export const FeatureMain: React.FC = () => {
  const dispatch = useDispatch();
  const { loading } = useSelector((state: IRootState) => state.post);
  const [isInFeed, setIsInFeed] = useState<boolean>(false);

  const { authInfo } = useAuth();

  useEffect(() => {
    if (authInfo?.id) {
      setIsInFeed(true);
    }
  }, [authInfo?.id]);

  useEffect(() => {
    // getHotPostsAPI();
    // getNewPostsAPI();
    // getTopPostsAPI();
    // getControversialPostsAPI();
  }, []);

  // const getHotPostsAPI = () => {
  //   const page = 1;
  //   const type = 'hot';
  //   if (isInFeed) {
  //     dispatch(getHotPostsInFeed({ page, type }));
  //     return;
  //   }
  //   dispatch(getHotPosts({ page, type }));
  //   return;
  // };

  const getNewPostsAPI = () => {
    const page = 1;
    const type = 'new';
    if (isInFeed) {
      dispatch(getNewPostsInFeed({ page, type }));
      return;
    }
    dispatch(getNewPosts({ page, type }));
    return;
  };

  const getControversialPostsAPI = () => {
    const page = 1;
    const type = 'controversial';
    if (isInFeed) {
      dispatch(getControversialPostsInFeed({ page, type }));
      return;
    }
    dispatch(getControversialPosts({ page, type }));
    return;
  };

  const getTopPostsAPI = () => {
    const page = 1;
    const type = 'top';
    if (isInFeed) {
      dispatch(getTopPostsInFeed({ page, type }));
      return;
    }
    dispatch(getTopPosts({ page, type }));
    return;
  };

  return (
    <MainLayout>
      <Banner src="https://s3-ap-southeast-1.amazonaws.com/images.spiderum.com/sp-images/40ff96a034c011ecb567655fead64d3e.jpeg" />
      <AllForYou />
      <div className="flex flex-row gap-x-1.8">
        <BestArticlesOfTheMonth />
        <HotMembers />
      </div>
    </MainLayout>
  );
};

export default FeatureMain;
