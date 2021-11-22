/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  Container,
  ArticlesWrapper,
  PaginationWrapper,
} from './best-articles-of-the-month.styles';
import {
  Title,
  QuaternaryArticles as Articles,
} from '@spiderum/spiderumapp/shared/ui';
import { useDispatch, useSelector } from 'react-redux';
import {
  getControversialPosts,
  getControversialPostsInFeed,
  IRootState,
  resetAction,
} from '@spiderum/shared/data-access/redux';
import { useCallback, useState, useEffect, useRef } from 'react';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { IPost } from '@spiderum/shared/util/typing';
import { slice } from 'lodash';
import { Pagination } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface BestArticlesOfTheMonthProps {}

export function BestArticlesOfTheMonth(props: BestArticlesOfTheMonthProps) {
  const dispatch = useDispatch();
  const { authInfo } = useAuth();
  const childReference = useRef(null);

  const { controversialPosts, loading } = useSelector(
    (state: IRootState) => state.post
  );
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getControversialPostsAPI();
  }, [authInfo?.id]);

  useEffect(() => {
    getControversialPostsAPI();
    // window.scrollTo({ behavior: 'smooth', top: 0 });
    scrollIntoView();
  }, [currentPage]);

  const getControversialPostsAPI = useCallback(() => {
    const page = currentPage;
    const type = 'controversial';
    if (authInfo?.id) {
      dispatch(getControversialPosts({ page, type }));
    } else {
      dispatch(getControversialPostsInFeed({ page, type }));
    }
  }, [authInfo?.id, currentPage]);

  const onChangePageNumber = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const scrollIntoView = () => {
    (childReference?.current as any)?.scrollIntoView({
      block: 'start',
      inline: 'nearest',
      behavior: 'smooth',
    });
  };

  return (
    <Container ref={childReference}>
      <Title className="uppercase">Bài viết của tháng</Title>
      <ArticlesWrapper>
        {!!controversialPosts &&
          !!controversialPosts?.posts &&
          !!controversialPosts?.posts?.items &&
          slice(controversialPosts?.posts?.items, 0, 20)?.map(
            (post: IPost, index: number) => <Articles key={index} {...post} />
          )}
      </ArticlesWrapper>
      <PaginationWrapper>
        <Pagination
          shadow
          rounded
          total={10}
          initialPage={currentPage}
          onChange={onChangePageNumber}
        />
      </PaginationWrapper>
    </Container>
  );
}

export default BestArticlesOfTheMonth;
