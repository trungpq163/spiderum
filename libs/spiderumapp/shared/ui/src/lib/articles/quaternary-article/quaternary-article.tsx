import { handleURL, ROUTE } from '@spiderum/shared/util/route';
import { IPost } from '@spiderum/shared/util/typing';
import { useRouter } from 'next/router';
import {
  Container,
  Category,
  Description,
  Details,
  SubTitle,
  Thumbnail,
  Title,
} from './quaternary-article.styles';
import { renderDayTimeWithStyleSlash } from '@spiderum/shared/util/day-time';

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
    created_at = '',
    reading_time,
    savedByUser,
    _id,
    slug = '',
  } = props;

  const router = useRouter();
  const postDetailsURL = handleURL({
    url: ROUTE.POST_DETAILS,
    param: 'slug',
    value: slug,
  });

  const thumbnailURL = process.env.NEXT_PUBLIC_API_THUMBNAIL_URL
    ? `${process.env.NEXT_PUBLIC_API_THUMBNAIL_URL}/${thumbnail}`
    : og_image_url;

  return (
    <Container>
      <Thumbnail
        src={thumbnailURL}
        onClick={() => router.push(postDetailsURL)}
      />
      <Details>
        <Category>{cat_id?.name}</Category>
        <Title onClick={() => router.push(postDetailsURL)}>{title}</Title>
        <SubTitle>{`${creator_id?.display_name} . ${renderDayTimeWithStyleSlash(
          created_at
        )}`}</SubTitle>
        <Description>{description}</Description>
      </Details>
    </Container>
  );
}

export default QuaternaryArticles;
