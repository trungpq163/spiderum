/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Avatar, Button, Tooltip } from '@nextui-org/react';
import { BellIcon, MailIcon, SearchBox } from '@spiderum/shared/ui';
import { ROUTE } from '@spiderum/shared/util/route';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { useRouter } from 'next/router';
import { AccountDropdown } from './components/account-dropdown/account-dropdown';
import { CategoryDropdown } from './components/category-dropdown/category-dropdown';
import {
  Container,
  NavLink,
  NavTitle,
  NavWrapper,
  Wrapper,
} from './header.styles';

/* eslint-disable-next-line */
export interface HeaderProps {}

export const GRAY = '#6E6D7A';
export const PINK = '#EA4B89';
export function Header(props: HeaderProps) {
  const { authInfo, handleLogout } = useAuth();

  const router = useRouter();

  return (
    <Container>
      <Wrapper>
        <NavTitle>Spiderum</NavTitle>

        <NavWrapper>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Đang theo dõi</NavLink>
          <NavLink href={ROUTE.FORGOT_PASSWORD}>Thành viên nổi bật</NavLink>
          <CategoryDropdown />

          <SearchBox />
          {!!authInfo?.id && (
            <>
              <BellIcon color={GRAY} />
              <MailIcon color={GRAY} />
              <Tooltip
                placement="bottom"
                color="background"
                trigger="hover"
                content={<AccountDropdown />}
              >
                <Avatar
                  pointer
                  size={25}
                  src="https://picsum.photos/200"
                  zoomed
                />
              </Tooltip>

              <Button color={PINK} auto>
                Viết bài
              </Button>
            </>
          )}
          {!authInfo?.id && (
            <Button color={PINK} auto onClick={() => router.push(ROUTE.LOGIN)}>
              Đăng nhập
            </Button>
          )}
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;
