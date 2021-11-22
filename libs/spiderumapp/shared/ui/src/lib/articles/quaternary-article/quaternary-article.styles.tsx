import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`flex flex-row gap-x-3.7 font-sans`}
`;

export const Thumbnail = styled.img`
  ${tw`w-[27%] object-cover transition-all transform bg-center hover:shadow-lg`}
  aspect-ratio: 237 / 177 !important;
  height: max-content !important;
`;

export const Details = styled.div`
  ${tw`flex flex-col leading-tight gap-y-1.2`}
`;

export const Title = styled.h1`
  ${tw`my-0 font-bold text-black text-28`}
`;

export const Category = styled.div`
  ${tw`my-0 font-normal uppercase text-18 text-sub-black`}
`;

export const SubTitle = styled.h3`
  ${tw`my-0 text-sm font-normal text-sub-black`}
`;

export const Description = styled.p`
  ${tw`my-0 text-sm font-normal text-black`}
`;
