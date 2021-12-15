/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IAuth } from '@spiderum/shared/util/typing';
import { IRootState, logoutSuccess } from '@spiderum/shared/data-access/redux';
import { useRouter } from 'next/router';

import {
  getUserInfoWithToken,
  isAuthenticated,
} from '@spiderum/shared/util/auth';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState<IAuth | null>(null);
  const { logout } = useSelector((state: IRootState) => state.auth);
  const router = useRouter();

  const dispatch = useDispatch();
  const handleLogout = useCallback(() => {
    dispatch(logoutSuccess());
    router.push('/login');
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
