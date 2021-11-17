import { Container, Main } from './main.styles';
import { Header, Footer } from '@spiderum/shared/ui';

export interface IMainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

export default MainLayout;
