import { Image } from '@spiderum/shared/ui';
import React from 'react';
import { Container } from './auth.styles';

export interface IAuthLayoutProps {
  children: React.ReactNode;
}

export const AuthLayout: React.FC<IAuthLayoutProps> = (props) => {
  const { children } = props;

  return (
    <Container>
      <Image
        src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c21528110017025.5fe1b0737f7d6.jpg"
        name="login-bg"
        className="h-screen col-span-6"
      />
      <div className="col-span-6">{children}</div>
    </Container>
  );
};

export default AuthLayout;
