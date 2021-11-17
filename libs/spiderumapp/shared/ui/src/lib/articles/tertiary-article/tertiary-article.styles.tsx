import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`font-sans cursor-pointer select-none`}
`;

export const Details = styled.div``;

export const FullName = styled.h2`
  ${tw`mt-1 font-sans text-xs font-medium leading-tight text-black capitalize`}
`;

export const Title = styled.h1`
  ${tw`font-semibold leading-tight text-black text-18 font-montserrat`}
`;

export const HeadingContent = styled.div`
  ${tw`pt-1.5 pb-1 flex flex-row justify-start items-center`}
`;

export const HeadingContentText = styled.p`
  ${tw`font-medium leading-tight text-11 text-sub-black`}
`;

export const Thumbnails = styled.img`
  ${tw`object-cover h-auto transition-all transform bg-center hover:shadow-lg`}
  aspect-ratio: 1 / 1;
`;
