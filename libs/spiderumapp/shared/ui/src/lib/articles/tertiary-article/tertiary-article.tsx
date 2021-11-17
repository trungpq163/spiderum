import { BookmarkIcon } from '@heroicons/react/outline';
import { IPost } from '@spiderum/shared/util/typing';
import { handleReadingTime } from '@spiderum/shared/util/day-time';

import {
  Container,
  Details,
  FullName,
  HeadingContent,
  HeadingContentText,
  Thumbnails,
  Title,
} from './tertiary-article.styles';

export type ITertiaryArticleProps = IPost;

export function TertiaryArticle(props: IPost) {
  const { creator_id, title, og_image_url, thumbnail, cat_id, reading_time } =
    props;

  const thumbnailURL = process.env.NEXT_PUBLIC_API_THUMBNAIL_URL
    ? `${process.env.NEXT_PUBLIC_API_THUMBNAIL_URL}/${thumbnail}`
    : og_image_url;

  return (
    <Container>
      {thumbnailURL && <Thumbnails src={thumbnailURL} />}
      <Details>
        <HeadingContent>
          <HeadingContentText>
            <span className="uppercase">{cat_id?.name && cat_id.name} </span>
            <span className="mx-0.5 text-black">|</span>{' '}
            {handleReadingTime(reading_time ?? 0)}
          </HeadingContentText>
          <BookmarkIcon
            className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
            width="15"
          />
        </HeadingContent>

        {title && <Title>{title}</Title>}

        <FullName>{creator_id?.display_name}</FullName>
      </Details>
    </Container>
  );
}

export default TertiaryArticle;
