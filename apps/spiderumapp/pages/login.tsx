/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextPage } from 'next';
import { withLogged } from '@spiderum/spiderumapp/shared/util/hocs';
import { FeatureMain as LoginContainer } from '@spiderum/spiderumapp//login';
import { AuthLayout } from '@spiderum/spiderumapp/shared/layout';

const LoginPage: NextPage = () => {
  return (
    <AuthLayout>
      <LoginContainer />
    </AuthLayout>
  );
};

export default withLogged(LoginPage)();
