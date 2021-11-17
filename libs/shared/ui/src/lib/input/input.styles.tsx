import styled, { css } from 'styled-components';
import tw from 'twin.macro';

export const Container = styled.div`
  ${tw`relative`}
`;

export const Label = styled.p`
  ${tw`font-normal mb-0.5 text-sm text-sub-black`}
`;

export const Required = styled.span`
  ${tw`text-sm font-medium text-red ml-0.5`}
`;

export const Icon = styled.div`
  transform: translateY(-50%);
  ${tw`absolute z-10 leading-none left-2 top-1/2 `}
`;

export const Input = styled.input<{
  error?: boolean;
  disabled?: boolean;
}>(
  ({ error, disabled }) => css`
    ${tw`w-full p-1.5 text-xs leading-none text-black border border-solid rounded-none border-border focus:border-red placeholder-sub-black placeholder-opacity-80`}
    ${error && tw`border-red`}
    ${disabled && tw`bg-border`}
  `
);

export const Error = styled.p`
  ${tw`flex items-center mt-1 text-xs font-normal text-red`}
`;
