import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth } from '@spiderum/shared/util/typing';
import { IRootState, logoutSuccess } from '@spiderum/shared/data-access/redux';

import {
  getUserInfoWithToken,
  isAuthenticated,
} from '@spiderum/shared/util/auth';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState<IAuth | null>(null);
  const { logout } = useSelector((state: IRootState) => state.auth);

  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logoutSuccess());
  }, []);

  useEffect(() => {
    if (logout) {
      setAuthInfo(null);
    }
  }, [logout]);

  useEffect(() => {
    if (isAuthenticated()) {
      const userInfo = getUserInfoWithToken();
      setAuthInfo(userInfo);
    }
  }, []);

  return { authInfo, handleLogout };
};
