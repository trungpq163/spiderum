/* eslint-disable @typescript-eslint/ban-types */
// Should not depend on (feature + local) lib
import redirect from 'nextjs-redirect';
import { ReactNode } from 'react';

import { useAuth } from '@spiderum/spiderumapp/shared/util/hooks';
import { ROUTE } from '@spiderum/shared/util/route';

export const withAuth =
  <T extends object>(WrappedComponent: React.FC<T>) =>
  () => {
    const WithAuth = (
      props: JSX.IntrinsicAttributes & T & { children?: ReactNode }
    ) => {
      const Redirect = redirect(ROUTE.LOGIN);
      const { authInfo } = useAuth();

      if (!authInfo) {
        return <Redirect children=" " />;
      }
      return <WrappedComponent {...props} />;
    };
    return WithAuth;
  };
