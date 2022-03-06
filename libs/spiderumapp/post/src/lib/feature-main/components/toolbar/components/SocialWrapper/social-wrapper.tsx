/* eslint-disable @typescript-eslint/no-empty-interface */
import * as React from 'react';
import { Container } from './social-wrapper.styles';
import { FacebookIcon, LinkedinIcon, TwitterIcon } from '@spiderum/shared/ui';
import { useRouter } from 'next/router';

interface SocialWrapperProps {}

export const SocialWrapper: React.FC<SocialWrapperProps> = (props) => {
  const { asPath } = useRouter();

  const currentURL = `${process.env.NEXT_PUBLIC_SPIDERUM_URL}/${asPath}`;

  const openInNewTab = (url: string): void => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  const clickToShare =
    (url: string): (() => void) =>
    () =>
      openInNewTab(url);

  return (
    <Container>
      <FacebookIcon
        className="cursor-pointer"
        onClick={clickToShare(
          `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`
        )}
      />
      <LinkedinIcon
        className="cursor-pointer"
        onClick={clickToShare(
          `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`
        )}
      />
      <TwitterIcon
        className="cursor-pointer"
        onClick={clickToShare(
          `https://twitter.com/intent/tweet?text=${currentURL}`
        )}
      />
    </Container>
  );
};
