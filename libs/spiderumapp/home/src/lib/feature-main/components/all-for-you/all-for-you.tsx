/* eslint-disable no-debugger */
/* eslint-disable react-hooks/exhaustive-deps */
import { Container, ArticlesWrapper } from './all-for-you.styles';
import {
  Title,
  TertiaryArticle as Article,
} from '@spiderum/spiderumapp/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import {
  getHotPosts,
  getHotPostsInFeed,
  IRootState,
  resetAction,
  savePost,
  unSavePost,
} from '@spiderum/shared/data-access/redux';
import { IPost, ISetPost } from '@spiderum/shared/util/typing';
import { slice } from 'lodash';
import { useEffect, useCallback, useState } from 'react';

/* eslint-disable-next-line */
export interface AllForYouProps {}

export function AllForYou(props: AllForYouProps) {
  const { hotPosts, loading } = useSelector((state: IRootState) => state.post);
  const { actionSuccess } = useSelector((state: IRootState) => state.common);
  const dispatch = useDispatch();
  const { authInfo } = useAuth();
  const [hasRendered, setHasRendered] = useState(false);

  useEffect(() => {
    setHasRendered(true);
  }, []);

  useEffect(() => {
    if (hasRendered) {
      getHotPostsAPI();
    }
  }, [hasRendered]);

  useEffect(() => {
    if (actionSuccess && hasRendered) {
      getHotPostsAPI();
      dispatch(resetAction());
    }
  }, [actionSuccess, hasRendered]);

  const getHotPostsAPI = useCallback(() => {
    const page = 1;
    const type = 'hot';
    if (authInfo?.id) {
      dispatch(getHotPostsInFeed({ page, type }));
    } else {
      dispatch(getHotPosts({ page, type }));
    }
  }, [authInfo]);

  const handleSavePost = (data: ISetPost) => {
    dispatch(savePost(data));
  };

  const handleUnSavePost = (data: ISetPost) => {
    dispatch(unSavePost(data));
  };

  return (
    <Container>
      <Title className="uppercase">DÀNH CHO BẠN</Title>
      <ArticlesWrapper>
        {!!hotPosts &&
          !!hotPosts?.posts &&
          !!hotPosts?.posts?.items &&
          slice(hotPosts?.posts?.items, 0, 4)?.map(
            (post: IPost, index: number) => (
              <Article
                key={index}
                handleSavePost={handleSavePost}
                handleUnSavePost={handleUnSavePost}
                {...post}
              />
            )
          )}
      </ArticlesWrapper>
    </Container>
  );
}

export default AllForYou;
