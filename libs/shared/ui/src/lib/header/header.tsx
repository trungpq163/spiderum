import {
  Container,
  NavTitle,
  NavLink,
  Wrapper,
  NavWrapper,
  NavDropdown,
  WriteNewPostBtn,
} from './header.styles';
import { ROUTE } from '@spiderum/shared/util/route';
import { DropdownIcon, MailIcon, BellIcon } from '../icons';
import { SearchBox } from '../search-box/search-box';
import { Avatar, Button } from '@nextui-org/react';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const gray = '#6E6D7A';
  const pink = '#EA4B89';
  return (
    <Container>
      <Wrapper>
        <NavTitle>Spiderum</NavTitle>

        <NavWrapper>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Đang theo dõi</NavLink>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Thành viên nổi bật</NavLink>
          <NavDropdown href="#" className="mr-auto">
            Thể loại
            <DropdownIcon color={gray} className="ml-0.2" />
          </NavDropdown>

          <SearchBox />
          <BellIcon color={gray} />
          <MailIcon color={gray} />

          <Avatar size={25} src="https://picsum.photos/200" zoomed />

          <Button color={pink} auto>
            Viết bài
          </Button>
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;
