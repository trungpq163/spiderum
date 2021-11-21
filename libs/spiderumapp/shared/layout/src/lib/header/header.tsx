/* eslint-disable react/jsx-no-undef */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Container,
  NavTitle,
  NavLink,
  Wrapper,
  NavWrapper,
  NavDropdown,
} from './header.styles';
import { ROUTE } from '@spiderum/shared/util/route';
import {
  DropdownIcon,
  MailIcon,
  BellIcon,
  SearchBox,
} from '@spiderum/shared/ui';
import { Avatar, Button, Link, Modal, Text, Tooltip } from '@nextui-org/react';
import { useRouter } from 'next/router';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/solid';
import { Fragment, useState } from 'react';
import {
  categoryItems,
  ICategoryItem,
  IAccountDropdownItem,
  accountDropdownItems,
} from '@spiderum/spiderumapp/shared/util/mock-data';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  const { authInfo } = useAuth();
  const gray = '#6E6D7A';
  const pink = '#EA4B89';
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
              <BellIcon color={gray} />
              <MailIcon color={gray} />

              <Tooltip
                placement="bottom"
                color="background"
                content={<AvatarContent />}
              >
                <Avatar
                  pointer
                  size={25}
                  src="https://picsum.photos/200"
                  zoomed
                />
              </Tooltip>

              <Button color={pink} auto>
                Viết bài
              </Button>
            </>
          )}
          {!authInfo?.id && (
            <Button color={pink} auto onClick={() => router.push(ROUTE.LOGIN)}>
              Đăng nhập
            </Button>
          )}
        </NavWrapper>
      </Wrapper>
    </Container>
  );
}

export default Header;

function CategoryDropdown(props: any) {
  return (
    <Menu
      as="div"
      className="relative inline-block font-sans text-xs text-left"
    >
      <Menu.Button className="" as="div">
        <NavDropdown className="mr-auto">
          Thể loại
          <DropdownIcon color="#6E6D7A" className="ml-0.2" />
        </NavDropdown>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute left-0 w-44.4 mt-2 origin-top-left bg-white rounded-lg shadow-lg ring-2 ring-black ring-opacity-5 focus:outline-none grid grid-cols-2 px-2.5 py-1.5"
          as="div"
        >
          {categoryItems.map((item: ICategoryItem, index: number) => (
            <Menu.Item as="div" key={index} className="mb-1.2">
              {({ active }) => (
                <Link
                  color="#757575"
                  href={item.route}
                  style={{ color: active ? '#292929' : '#757575' }}
                >
                  {item.name}
                </Link>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function AvatarContent(props: any) {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);
  const { handleLogout } = useAuth();
  const closeHandler = () => {
    setVisible(false);
  };
  const onLogout = () => {
    setVisible(false);
    handleLogout();
  };

  return (
    <div className="py-3.2 px-2 font-normal hover:text-black">
      <div className="border-b border-border">
        <Link color="#757575" className="py-0.8">
          Hồ sơ cá nhân
        </Link>
      </div>

      <div className="border-b border-border">
        <div className="flex flex-col">
          <Link color="#757575" className="py-0.8">
            Bài viết của bạn
          </Link>
          <Link color="#757575" className="py-0.8">
            Bình luận của bạn
          </Link>
          <Link color="#757575" className="py-0.8">
            Nháp của bạn
          </Link>
        </div>
      </div>

      <div className="border-b border-border">
        <Link color="#757575" className="py-0.8">
          Tuỳ chỉnh tài khoản
        </Link>
      </div>

      <div onClick={handler}>
        <Text
          color="#757575"
          className="py-0.8 cursor-pointer hover:text-black"
        >
          Đăng xuất
        </Text>
        <Modal
          closeButton
          aria-labelledby="modal-title"
          open={visible}
          onClose={closeHandler}
        >
          <Modal.Header>
            <Text id="modal-title" size={18} className="font-bold">
              Đăng xuất tài khoản
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Text id="modal-title" size={14} className="text-center">
              Bạn có chắc chắn muốn đăng xuất?
            </Text>
          </Modal.Body>
          <Modal.Footer>
            <Button auto flat color="error" onClick={closeHandler}>
              Đóng
            </Button>
            <Button auto onClick={onLogout}>
              OK
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
}
