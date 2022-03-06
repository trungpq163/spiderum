import { ThumbUpIcon, BookmarkIcon } from '@heroicons/react/outline';
import { IRootState } from '@spiderum/shared/data-access/redux';
import { SocialWrapper } from './components/SocialWrapper/social-wrapper';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { Container } from './toolbar.styles';

/* eslint-disable-next-line */
export interface ToolbarProps {}

export function Toolbar(props: ToolbarProps) {
  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };
  const { postDetails, loading } = useSelector(
    (state: IRootState) => state.postDetails
  );

  return (
    <Container>
      <div className="flex flex-row items-center justify-start gap-x-1">
        <div className="flex flex-row gap-x-0.5 items-center justify-start text-15">
          {postDetails?.post?.point && (
            <>
              <ThumbUpIcon width={24} /> {postDetails?.post?.point}
            </>
          )}
        </div>
        <BookmarkIcon width={24} />
      </div>
      <SocialWrapper />
    </Container>
  );
}

export default Toolbar;
