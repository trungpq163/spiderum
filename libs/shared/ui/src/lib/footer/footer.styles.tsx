import tw from 'twin.macro';
import styled from 'styled-components';
import { Link } from '@spiderum/shared/ui';

export const Container = styled.div`
  ${tw`pt-20 pb-4`}
`;

export const Content = styled.h1`
  ${tw`text-sm font-normal text-center text-sub-black`}
`;

export const TrungPQ163 = styled(Link)`
  ${tw`text-red`}
`;
