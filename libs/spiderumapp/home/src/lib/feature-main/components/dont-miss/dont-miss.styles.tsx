import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw``}
`;

export const DontMissWrapper = styled.div`
  ${tw`grid grid-cols-12 gap-x-2 w-full`}
`;

export const Left = styled.div`
  ${tw`col-span-5`}
`;

export const Right = styled.div`
  ${tw`col-span-7 flex flex-col`}
`;
