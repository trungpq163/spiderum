import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw``}
`;

export const ArticlesWrapper = styled.div`
  ${tw`grid desktop:grid-cols-4 gap-x-1.8 laptop:grid-cols-3 tablet:grid-cols-2 grid-cols-2 mt-2`}
`;
