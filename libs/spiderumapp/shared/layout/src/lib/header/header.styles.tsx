import tw from 'twin.macro';
import styled from 'styled-components';
import { Link } from '@spiderum/shared/ui';

export const Container = styled.div`
  ${tw`py-2.5 border-b border-border cursor-pointer select-none fixed top-0 bg-white w-full z-50`}
  box-shadow: 0 10px 15px -3px rgba(var(--blue-500),.05),0 4px 6px -2px rgba(var(--blue-500),.025);
`;

export const Wrapper = styled.div`
  ${tw`container flex flex-row items-center justify-start mx-auto`}
`;

export const NavLink = styled(Link)`
  ${tw`font-sans text-xs font-semibold text-sub-black`}
`;

export const NavDropdown = styled.a`
  ${tw`flex flex-row font-sans text-xs font-semibold text-sub-black`}
`;

export const NavTitle = styled.h1`
  ${tw`text-xl font-normal text-black font-eksell`}
`;

export const NavWrapper = styled.div`
  ${tw`flex flex-row justify-start items-center gap-x-2.5 ml-5 w-full`}
`;
