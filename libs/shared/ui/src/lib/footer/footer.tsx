import { Container, Content, TrungPQ163 } from './footer.styles';

/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <Container className="footer">
      <Content>
        Development by{' '}
        <TrungPQ163 href="http://github.com/trungpq163">trungpq163</TrungPQ163>{' '}
        with{' '}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </Content>
    </Container>
  );
}

export default Footer;
