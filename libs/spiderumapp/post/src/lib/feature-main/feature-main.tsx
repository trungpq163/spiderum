import { IRootState } from '@spiderum/shared/data-access/redux';
import { useSelector } from 'react-redux';
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { Avatar } from '@nextui-org/react';
import { Toolbar } from './components/toolbar/toolbar';
import { renderDayTimeWithStyleSlash } from '@spiderum/shared/util/day-time';
import { Subscription } from './components/subscription/subscription';
import {
  Title,
  Container,
  Category,
  Description,
  Top,
  Content,
} from './feature-main.styles';
/* eslint-disable-next-line */
export interface FeatureMainProps {}

export function FeatureMain(props: FeatureMainProps) {
  const { postDetails, loading } = useSelector(
    (state: IRootState) => state.postDetails
  );

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
        {postDetails?.post?.body &&
          postDetails?.post?.body?.length > 0 &&
          postDetails?.post?.body?.map((content: string, index: number) => (
            <Content
              key={index}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ))}
        <Toolbar />
        <Subscription />
      </Container>
    </MainLayout>
  );
}

export default FeatureMain;
