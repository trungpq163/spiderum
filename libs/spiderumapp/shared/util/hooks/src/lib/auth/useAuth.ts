import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { IAuth } from '@spiderum/shared/util/typing';

import {
  getUserInfoWithToken,
  isAuthenticated,
} from '@spiderum/shared/util/auth';

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState<IAuth | null>(null);

  const logout = useDispatch();

  useEffect(() => {
    if (isAuthenticated()) {
      const userInfo = getUserInfoWithToken();
      setAuthInfo(userInfo);
    }
  }, []);

  return { authInfo, logout };
};
