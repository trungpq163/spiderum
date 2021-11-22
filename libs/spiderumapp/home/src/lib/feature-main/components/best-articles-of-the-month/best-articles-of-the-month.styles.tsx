import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`w-9/12 border-r border-border pr-[10%]`}
`;

export const ArticlesWrapper = styled.div`
  ${tw`flex flex-col mt-2 gap-y-5 `}
`;

export const PaginationWrapper = styled.div`
  ${tw`flex flex-row justify-end mt-4`}
`;
