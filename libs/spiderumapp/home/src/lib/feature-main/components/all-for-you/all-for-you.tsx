import { Container, ArticlesWrapper } from './all-for-you.styles';
import {
  Title,
  TertiaryArticle as Article,
} from '@spiderum/spiderumapp/shared/ui';
import { useSelector } from 'react-redux';
import { IRootState } from '@spiderum/shared/data-access/redux';
import { IPost } from '@spiderum/shared/util/typing';
import { slice } from 'lodash';
/* eslint-disable-next-line */
export interface AllForYouProps {}

export function AllForYou(props: AllForYouProps) {
  const { hotPosts, loading } = useSelector((state: IRootState) => state.post);
  return (
    <Container>
      <Title className="uppercase">DÀNH CHO BẠN</Title>
      {loading ? (
        'Loading......'
      ) : (
        <ArticlesWrapper>
          {!!hotPosts &&
            !!hotPosts?.posts &&
            !!hotPosts?.posts?.items &&
            slice(hotPosts?.posts?.items, 0, 4)?.map(
              (post: IPost, index: number) => <Article key={index} {...post} />
            )}
        </ArticlesWrapper>
      )}
    </Container>
  );
}

export default AllForYou;
