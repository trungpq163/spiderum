/* eslint-disable array-callback-return */
import { IRootState } from '@spiderum/shared/data-access/redux';
import { useSelector } from 'react-redux';
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { Avatar } from '@nextui-org/react';
import { Toolbar } from './components/toolbar/toolbar';
import { renderDayTimeWithStyleSlash } from '@spiderum/shared/util/day-time';
import { Subscription } from './components/subscription/subscription';
import { Image } from './components/image/image';
import {
  Title,
  Container,
  Category,
  Description,
  Top,
  Content,
} from './feature-main.styles';
import { IBlock } from '@spiderum/shared/util/typing';
/* eslint-disable-next-line */
export interface FeatureMainProps {}

const IMAGE = 'image';
const PARAGRAPH = 'paragraph';
const BIGGER_HEADER = 'biggerHeader';
const PULL_QUOTE = 'pullquote';
const LINK_TOOL = 'linkTool';

export function FeatureMain(props: FeatureMainProps) {
  const { postDetails, loading } = useSelector(
    (state: IRootState) => state.postDetails
  );

  console.log({ postDetails, loading });

  const renderBodyBlock = (blocks: IBlock[]) => {
    return blocks.map((block: IBlock, index: number) => {
      switch (block.type) {
        case IMAGE:
          return (
            <Image
              src={block?.data?.file?.url}
              caption={block.data?.caption}
              key={index}
            />
          );
        case PARAGRAPH:
          return (
            block?.data?.text && (
              <p
                key={index}
                dangerouslySetInnerHTML={{ __html: block?.data?.text }}
              />
            )
          );
        case BIGGER_HEADER:
          return <h1 className="font-medium text-28">{block?.data?.text}</h1>;
        case PULL_QUOTE:
          return (
            <div>
              <h3>{block?.data?.text}</h3>
              <span>{block?.data?.caption}</span>
            </div>
          );
        case LINK_TOOL:
          return <div>{block?.data?.meta?.description}</div>;
        default:
          return;
      }
    });
  };

  return (
    <MainLayout>
      <Container>
        {postDetails?.post?.cat_id?.name && (
          <Category>{postDetails?.post?.cat_id?.name}</Category>
        )}
        {postDetails?.post?.title && <Title>{postDetails?.post?.title}</Title>}
        {postDetails?.post?.description && (
          <Description>{postDetails?.post?.description}</Description>
        )}
        <Top.Container>
          <Avatar
            text="sc"
            size={60}
            src={`${process.env.NEXT_PUBLIC_API_AVATAR_URL}/${postDetails?.post?.creator_id?.avatar}`}
          />

          <Top.AccountInfo.Container>
            {postDetails?.post?.creator_id?.display_name && (
              <Top.AccountInfo.Name>
                {postDetails?.post?.creator_id?.display_name}
              </Top.AccountInfo.Name>
            )}
            {postDetails?.post?.created_at && (
              <Top.AccountInfo.PostedDate>
                {renderDayTimeWithStyleSlash(postDetails?.post?.created_at)}
              </Top.AccountInfo.PostedDate>
            )}
          </Top.AccountInfo.Container>
        </Top.Container>
        {postDetails?.post?.body?.blocks &&
          postDetails?.post?.body?.blocks?.length > 0 &&
          renderBodyBlock(postDetails?.post?.body?.blocks)}
        <Toolbar />
        <Subscription />
      </Container>
    </MainLayout>
  );
}

export default FeatureMain;
