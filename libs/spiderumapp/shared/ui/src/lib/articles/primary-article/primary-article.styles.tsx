import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div``;

export const Thumbnail = styled.img`
  ${tw`object-cover w-full h-auto transition-all transform bg-center hover:shadow-lg`}
  aspect-ratio: 485 / 304 !important;
`;

export const TopContent = {
  Wrapper: styled.div`
    ${tw`my-1.2 flex flex-col gap-y-1.2`}
  `,
  Title: styled.h1`
    ${tw`my-0 text-lg font-semibold leading-tight text-black font-montserrat`}
  `,
  SubTitle: styled.h2`
    ${tw`my-0 font-sans font-medium text-13 text-sub-black`}
  `,
  Description: styled.p`
    ${tw`my-0 font-sans font-medium text-black text-13`}
  `,
};

export const BottomContent = {
  Wrapper: styled.div``,
  Title: styled.h1`
    ${tw`font-sans font-medium leading-tight text-black text-13`}
  `,
  SubTitle: styled.h2`
    ${tw`font-sans font-medium leading-tight text-sub-black text-13`}
  `,
  Actions: styled.div``,
};
