import { IRootState } from '@spiderum/shared/data-access/redux';
import { useSelector } from 'react-redux';
import { MainLayout } from '@spiderum/spiderumapp/shared/layout';
import { Avatar } from '@nextui-org/react';
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
        {postDetails?.category && <Category>{postDetails.category}</Category>}
        {postDetails?.title && <Title>{postDetails.title}</Title>}
        {postDetails?.description && (
          <Description>{postDetails.description}</Description>
        )}
        <Top.Container>
          <Avatar
            text="sc"
            size={60}
            src={postDetails?.authorInfo?.avatarURL}
          />

          <Top.AccountInfo.Container>
            {postDetails?.authorInfo?.name && (
              <Top.AccountInfo.Name>
                {postDetails?.authorInfo?.name}
              </Top.AccountInfo.Name>
            )}
            {postDetails?.authorInfo?.postCreatedDate && (
              <Top.AccountInfo.PostedDate>
                {postDetails?.authorInfo?.postCreatedDate}
              </Top.AccountInfo.PostedDate>
            )}
          </Top.AccountInfo.Container>
        </Top.Container>
        {postDetails?.contentList &&
          postDetails?.contentList.length > 0 &&
          postDetails?.contentList.map((content: string, index: number) => (
            <Content
              key={index}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ))}
      </Container>
    </MainLayout>
  );
}

export default FeatureMain;
