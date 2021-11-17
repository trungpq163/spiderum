import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = styled.div`
  ${tw`flex flex-row items-center justify-start w-3/12 ml-auto rounded-md bg-border px-1.2`}
`;

export const Field = styled.input`
  ${tw`w-full text-xs font-normal transform bg-transparent placeholder-sub-black focus-within:shadow-none focus-within:outline-none focus:placeholder-border`}
`;

export const IconWrapper = styled.div`
  ${tw`py-1 pr-1.2`}
`;
