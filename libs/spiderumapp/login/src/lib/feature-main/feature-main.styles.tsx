import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`flex flex-col items-center justify-center h-full`}
`;

export const Wrapper = styled.div`
  ${tw`w-10/12 desktop:w-5/12`}
`;

export const Title = styled.h1`
  ${tw`text-xl font-bold text-black`}
`;

export const SubTitle = styled.h2`
  ${tw`text-sm font-normal text-black`}
`;

export const TitleWrapper = styled.div`
  ${tw`flex flex-col items-start justify-center w-full`}
`;
