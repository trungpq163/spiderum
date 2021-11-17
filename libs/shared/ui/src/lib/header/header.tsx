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
import { Image } from '../image/image';
import { SearchBox } from '../search-box/search-box';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const color = '#6E6D7A';
  return (
    <Container>
      <Wrapper>
        <NavTitle>Spiderum</NavTitle>

        <NavWrapper>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Đang theo dõi</NavLink>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Thành viên nổi bật</NavLink>
          <NavDropdown href="#" className="mr-auto">
            Thể loại
            <DropdownIcon color={color} className="ml-0.2" />
          </NavDropdown>

          <SearchBox />
          <BellIcon color={color} />
          <MailIcon color={color} />

          <Image
            src="https://picsum.photos/200"
            name="avatar"
            className="rounded-full w-2.5 h-2.5"
          />

          <WriteNewPostBtn>Viết bài</WriteNewPostBtn>
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;
