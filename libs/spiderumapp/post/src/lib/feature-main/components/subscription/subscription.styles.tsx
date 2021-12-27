import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`grid grid-cols-2 text-black  mt-2.5`}
`;

export const Left = styled.div`
  ${tw`flex flex-row items-center justify-start pr-2 gap-x-1`}
`;

export const Right = styled.div`
  ${tw`flex flex-row items-center justify-start pl-2 border-l text-border`}
`;

export const CategoryTitle = styled.div`
  ${tw`mr-auto text-black`}
`;
