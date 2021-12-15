import { BookmarkIcon } from '@heroicons/react/outline';
import { BookmarkIcon as BookmarkSolidIcon } from '@heroicons/react/solid';
import { IPost, ISetPost } from '@spiderum/shared/util/typing';
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
import { useCallback } from 'react';

export interface ITertiaryArticleProps extends IPost {
  handleSavePost?: (data: ISetPost) => void;
  handleUnSavePost?: (data: ISetPost) => void;
}

export function TertiaryArticle(props: ITertiaryArticleProps) {
  const {
    creator_id,
    title,
    og_image_url,
    thumbnail,
    cat_id,
    reading_time,
    handleSavePost,
    handleUnSavePost,
    savedByUser,
    _id,
  } = props;

  const thumbnailURL = process.env.NEXT_PUBLIC_API_THUMBNAIL_URL
    ? `${process.env.NEXT_PUBLIC_API_THUMBNAIL_URL}/${thumbnail}`
    : og_image_url;

  const handleSavePostClick = useCallback(() => {
    _id && handleSavePost && handleSavePost({ post_id: _id });
  }, [_id, handleSavePost]);

  const handleUnSavePostClick = useCallback(() => {
    _id && handleUnSavePost && handleUnSavePost({ post_id: _id });
  }, [_id, handleUnSavePost]);

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

          {savedByUser && (
            <BookmarkSolidIcon
              onClick={() => handleUnSavePostClick()}
              className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              width="15"
            />
          )}

          {!savedByUser && (
            <BookmarkIcon
              onClick={() => handleSavePostClick()}
              className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              width="15"
            />
          )}
        </HeadingContent>

        {title && <Title>{title}</Title>}

        <FullName>{creator_id?.display_name}</FullName>
      </Details>
    </Container>
  );
}

export default TertiaryArticle;
