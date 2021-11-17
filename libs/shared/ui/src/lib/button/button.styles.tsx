import styled from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.button<{
  loading: string;
}>`
  ${tw`flex items-center justify-center p-1.4 text-sm font-bold duration-100 hover:bg-opacity-80`}
  ${({ loading }) =>
    !!loading && tw`cursor-wait pointer-events-none bg-opacity-80`}
`;
