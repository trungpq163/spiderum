/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @typescript-eslint/ban-types */
// Should not depend on (feature + local) lib
import redirect from 'nextjs-redirect';
import { ReactNode } from 'react';

import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { ROUTE } from '@spiderum/shared/util/route';

// User has to be logged in to access this page
export const withLogged =
  <T extends object>(WrappedComponent: React.FC<T>) =>
  () => {
    const withLogged = (
      props: JSX.IntrinsicAttributes & T & { children?: ReactNode }
    ) => {
      const Redirect = redirect(ROUTE.HOME);
      const { authInfo } = useAuth();

      if (authInfo) {
        return <Redirect children=" " />;
      }
      return <WrappedComponent {...props} />;
    };
    return withLogged;
  };
