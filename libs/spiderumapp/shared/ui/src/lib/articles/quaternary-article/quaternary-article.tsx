import { IPost } from '@spiderum/shared/util/typing';
import {
  Container,
  Category,
  Description,
  Details,
  SubTitle,
  Thumbnail,
  Title,
} from './quaternary-article.styles';

/* eslint-disable-next-line */
export interface QuaternaryArticlesProps extends IPost {}

export function QuaternaryArticles(props: QuaternaryArticlesProps) {
  const {
    creator_id,
    title,
    og_image_url,
    thumbnail,
    cat_id,
    description,
    reading_time,
    savedByUser,
    _id,
  } = props;

  const thumbnailURL = process.env.NEXT_PUBLIC_API_THUMBNAIL_URL
    ? `${process.env.NEXT_PUBLIC_API_THUMBNAIL_URL}/${thumbnail}`
    : og_image_url;

  return (
    <Container>
      <Thumbnail src={thumbnailURL} />
      <Details>
        <Category>{cat_id?.name}</Category>
        <Title>{title}</Title>
        <SubTitle>{`${creator_id?.display_name} . 28/10/2021`}</SubTitle>
        <Description>{description}</Description>
      </Details>
    </Container>
  );
}

export default QuaternaryArticles;
