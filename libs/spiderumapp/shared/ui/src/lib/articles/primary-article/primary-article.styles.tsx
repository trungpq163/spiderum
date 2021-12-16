/* eslint-disable @typescript-eslint/no-empty-interface */
import tw from 'twin.macro';
import styled from 'styled-components';

interface IContainerProps {
  isSubArticle?: boolean;
}

interface IThumbnailProps extends IContainerProps {}

interface ITopContentWrapperProps extends IContainerProps {}

export const Container = styled.div<IContainerProps>`
  ${({ isSubArticle }) =>
    !!isSubArticle &&
    tw`flex flex-row gap-x-2.2 py-2.5 border-t border-b text-border`}
`;

export const Thumbnail = styled.img<IThumbnailProps>`
  ${tw`object-cover transition-all transform bg-center cursor-pointer hover:shadow-lg`}
  ${({ isSubArticle }) => (isSubArticle ? tw`w-18.4 h-11.5` : tw`w-full `)}
  ${({ isSubArticle }) =>
    isSubArticle
      ? `aspect-ratio: 184 / 115 !important;`
      : `aspect-ratio: 485 / 304 !important;`}
`;

export const Wrapper = styled.div`
  ${tw`flex flex-col`}
`;

export const TopContent = {
  Wrapper: styled.div<ITopContentWrapperProps>`
    ${tw`flex flex-col gap-y-1.2`}
    ${({ isSubArticle }) => (!isSubArticle ? tw`my-1.2` : tw`mb-1.2`)}
  `,
  Title: styled.h1`
    ${tw`my-0 text-lg font-semibold leading-tight text-black cursor-pointer font-montserrat`}
  `,
  SubTitle: styled.h2`
    ${tw`my-0 font-sans font-medium text-13 text-sub-black`}
  `,
  Description: styled.p`
    ${tw`my-0 font-sans font-medium text-black text-13`}
  `,
};

export const BottomContent = {
  Wrapper: styled.div`
    ${tw`flex flex-row text-black`}
  `,
  Title: styled.h1`
    ${tw`font-sans font-semibold leading-none text-black text-13 mb-0.4`}
  `,
  SubTitle: styled.h2`
    ${tw`mb-0 font-sans font-medium leading-none text-sub-black text-13`}
  `,
  Actions: styled.div`
    ${tw`flex flex-row items-center justify-center gap-x-0.3 text-13 font-normal`}
  `,
  ActionsWrapper: styled.div`
    ${tw`flex flex-row items-center justify-center ml-auto gap-x-1.6 mr-1.6`}
  `,
};
