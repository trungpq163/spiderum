import {
  Container,
  Thumbnail,
  BottomContent,
  TopContent,
  Wrapper,
} from './primary-article.styles';
import { Avatar } from '@nextui-org/react';
import {
  BookmarkIcon,
  ThumbUpIcon,
  EyeIcon,
  AnnotationIcon,
} from '@heroicons/react/outline';
import {
  BookmarkIcon as BookmarkSolidIcon,
  ThumbUpIcon as ThumbUpSolidIcon,
} from '@heroicons/react/solid';
import { IPost, ISetPost } from '@spiderum/shared/util/typing';
import {
  handleReadingTime,
  renderDayTime,
} from '@spiderum/shared/util/day-time';
import { handleView } from '@spiderum/shared/util/view';
import { useCallback } from 'react';
import { useRouter } from 'next/router';
import { handleURL, ROUTE } from '@spiderum/shared/util/route';

/* eslint-disable-next-line */
export interface PrimaryArticlesProps extends IPost {
  isSubArticle?: boolean;
  handleSavePost?: (data: ISetPost) => void;
  handleUnSavePost?: (data: ISetPost) => void;
  handleVotePost?: (data: ISetPost) => void;
  handleUnVotePost?: (data: ISetPost) => void;
}

export function PrimaryArticles(props: PrimaryArticlesProps) {
  const {
    isSubArticle = false,
    thumbnail,
    og_image_url,
    cat_id,
    creator_id,
    reading_time,
    title,
    description,
    views_count,
    comment_count,
    point,
    savedByUser,
    userAction,
    _id,
    handleSavePost,
    handleUnSavePost,
    handleVotePost,
    handleUnVotePost,
    created_at,
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
  const handleSavePostClick = useCallback(() => {
    _id && handleSavePost && handleSavePost({ post_id: _id });
  }, [_id, handleSavePost]);

  const handleUnSavePostClick = useCallback(() => {
    _id && handleUnSavePost && handleUnSavePost({ post_id: _id });
  }, [_id, handleUnSavePost]);

  const handleVotePostClick = useCallback(() => {
    _id && handleVotePost && handleVotePost({ post_id: _id });
  }, [_id, handleVotePost]);

  const handleUnVotePostClick = useCallback(() => {
    _id && handleUnVotePost && handleUnVotePost({ post_id: _id });
  }, [_id, handleUnVotePost]);

  return (
    <Container isSubArticle={isSubArticle}>
      <Thumbnail
        src={thumbnailURL}
        isSubArticle={isSubArticle}
        onClick={() => router.push(postDetailsURL)}
      />
      <Wrapper>
        <TopContent.Wrapper isSubArticle={isSubArticle}>
          <div className="flex flex-row items-center justify-center top-heading">
            <TopContent.SubTitle>
              <span className="uppercase">{cat_id?.name && cat_id.name} </span>
              <span className="mx-0.5 text-black">|</span>{' '}
              {handleReadingTime(reading_time ?? 0)}
            </TopContent.SubTitle>
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
          </div>

          {title && (
            <TopContent.Title onClick={() => router.push(postDetailsURL)}>
              {title}
            </TopContent.Title>
          )}
          {description && (
            <TopContent.Description>{description}</TopContent.Description>
          )}
        </TopContent.Wrapper>
        <BottomContent.Wrapper>
          <div className="flex flex-row items-center justify-start gap-x-1.2">
            {creator_id?.avatar ? (
              <Avatar
                text="sc"
                size={50}
                src={`${process.env.NEXT_PUBLIC_API_AVATAR_URL}/${creator_id?.avatar}`}
              />
            ) : (
              <Avatar text="" size={50} src="https://picsum.photos/200" />
            )}

            <div className="flex flex-col items-start justify-center">
              <BottomContent.Title>
                {creator_id?.display_name}
              </BottomContent.Title>
              <BottomContent.SubTitle>
                {created_at && renderDayTime(created_at)}
              </BottomContent.SubTitle>
            </div>
          </div>
          <BottomContent.ActionsWrapper>
            <BottomContent.Actions>
              {userAction === 1 ? (
                <ThumbUpSolidIcon
                  onClick={() => handleUnVotePostClick()}
                  width={24}
                  className="cursor-pointer text-sub-black hover:text-gray-900"
                />
              ) : (
                <ThumbUpIcon
                  onClick={() => handleVotePostClick()}
                  width={24}
                  className="cursor-pointer text-sub-black hover:text-gray-900"
                />
              )}{' '}
              {point && handleView(point)}
            </BottomContent.Actions>
            <BottomContent.Actions>
              <EyeIcon
                width={24}
                className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              />{' '}
              {views_count && handleView(views_count)}
            </BottomContent.Actions>
            <BottomContent.Actions>
              <AnnotationIcon
                width={24}
                className="ml-auto cursor-pointer text-sub-black hover:text-gray-900"
              />
              {comment_count && handleView(comment_count)}
            </BottomContent.Actions>
          </BottomContent.ActionsWrapper>
        </BottomContent.Wrapper>
      </Wrapper>
    </Container>
  );
}

export default PrimaryArticles;
