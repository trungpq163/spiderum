/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Link, Modal, Text } from '@nextui-org/react';
import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { useCallback, useEffect, useState } from 'react';
import { delay } from 'lodash';
/* eslint-disable-next-line */
export interface AccountDropdownProps {}

export function AccountDropdown(props: AccountDropdownProps) {
  const [visible, setVisible] = useState(false);
  const [isLogout, setIsLogout] = useState(false);
  const handler = () => setVisible(true);

  const { handleLogout } = useAuth();

  const closeHandler = () => {
    setVisible(false);
  };

  const onLogout = () => {
    setVisible(false);
    setIsLogout(true);
  };

  useEffect(() => {
    if (isLogout && !visible) {
      setIsLogout(false);
      handleLogout();
    }
  }, [isLogout, visible]);

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

export default AccountDropdown;
