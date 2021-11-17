import tw from 'twin.macro';
import styled from 'styled-components';
import { Form as _Form } from 'formik';

export const Container = styled.div`
  ${tw`flex flex-col items-center justify-center w-full`}
`;

export const Form = styled(_Form)`
  ${tw`grid w-full mt-2 gap-y-2`}
`;

export const ButtonWrapper = styled.div`
  ${tw`w-16 mt-10 ml-auto`}
`;
