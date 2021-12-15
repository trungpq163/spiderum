/* eslint-disable react-hooks/exhaustive-deps */
import {
  getNewPosts,
  getNewPostsInFeed,
  getTopPosts,
  getTopPostsInFeed,
  IRootState,
  resetAction,
  savePost,
  unSavePost,
  unVotePost,
  votePost,
} from '@spiderum/shared/data-access/redux';
import { random, slice } from 'lodash';
import {
  Title,
  PrimaryArticles,
  SecondaryArticles,
} from '@spiderum/spiderumapp/shared/ui';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, DontMissWrapper, Left, Right } from './dont-miss.styles';
import { IPost, ISetPost } from '@spiderum/shared/util/typing';

/* eslint-disable-next-line */
export interface DontMissProps {}

export function DontMiss(props: DontMissProps) {
  const dispatch = useDispatch();
  const { authInfo } = useAuth();
  const { newPosts, loading, topPosts } = useSelector(
    (state: IRootState) => state.post
  );
  const { actionSuccess } = useSelector((state: IRootState) => state.common);
  const [primaryPost, setPrimaryPost] = useState<IPost>();

  useEffect(() => {
    getNewPostAPI();
    getTopPostAPI();
  }, [authInfo?.id]);

  useEffect(() => {
    if (actionSuccess) {
      getNewPostAPI();
      getTopPostAPI();
      dispatch(resetAction());
    }
  }, [actionSuccess]);

  useEffect(() => {
    if (topPosts?.posts?.items && topPosts?.posts?.items?.length > 0) {
      setPrimaryPost(topPosts?.posts?.items[0]);
    }
  }, [topPosts]);

  const getNewPostAPI = useCallback(() => {
    const page = 1;
    const type = 'new';
    if (authInfo?.id) {
      dispatch(getNewPostsInFeed({ page, type }));
    } else {
      dispatch(getNewPosts({ page, type }));
    }
  }, [authInfo]);

  const getTopPostAPI = useCallback(() => {
    const page = 1;
    const type = 'top';
    if (authInfo?.id) {
      dispatch(getTopPostsInFeed({ page, type }));
    } else {
      dispatch(getTopPosts({ page, type }));
    }
  }, [authInfo]);

  const handleSavePost = (data: ISetPost) => {
    dispatch(savePost(data));
  };

  const handleUnSavePost = (data: ISetPost) => {
    dispatch(unSavePost(data));
  };

  const handleVotePost = (data: ISetPost) => {
    dispatch(votePost(data));
  };

  const handleUnVotePost = (data: ISetPost) => {
    dispatch(unVotePost(data));
  };

  return (
    <Container>
      <Title className="uppercase">Đừng bỏ lỡ</Title>
      <DontMissWrapper>
        <Left>
          {primaryPost && (
            <PrimaryArticles
              {...primaryPost}
              handleSavePost={handleSavePost}
              handleUnSavePost={handleUnSavePost}
              handleVotePost={handleVotePost}
              handleUnVotePost={handleUnVotePost}
            />
          )}
        </Left>
        <Right>
          {newPosts?.posts?.items &&
            newPosts?.posts?.items.length > 0 &&
            slice(newPosts?.posts?.items, 0, 3)?.map(
              (post: IPost, index: number) => (
                <SecondaryArticles
                  key={index}
                  {...post}
                  handleSavePost={handleSavePost}
                  handleUnSavePost={handleUnSavePost}
                  handleVotePost={handleVotePost}
                  handleUnVotePost={handleUnVotePost}
                />
              )
            )}
        </Right>
      </DontMissWrapper>
    </Container>
  );
}

export default DontMiss;
