import { ThumbUpIcon, BookmarkIcon } from '@heroicons/react/outline';
import { IRootState } from '@spiderum/shared/data-access/redux';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@spiderum/shared/ui';
import { useSelector } from 'react-redux';
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

  const clickToShare =
    (url: string): (() => void) =>
    () =>
      openInNewTab(url);

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
      <div className="flex flex-row items-center justify-start gap-x-1.5 ml-auto">
        <FacebookIcon
          className="cursor-pointer"
          onClick={clickToShare(
            `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`
          )}
        />
        <LinkedinIcon
          className="cursor-pointer"
          onClick={clickToShare(
            `https://www.linkedin.com/sharing/share-offsite/?url=${window.location.href}`
          )}
        />
        <TwitterIcon
          className="cursor-pointer"
          onClick={clickToShare(
            `https://twitter.com/intent/tweet?text=${window.location.href}`
          )}
        />
      </div>
    </Container>
  );
}

export default Toolbar;
