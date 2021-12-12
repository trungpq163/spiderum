import {
  Title,
  PrimaryArticles,
  SecondaryArticles,
} from '@spiderum/spiderumapp/shared/ui';
import { Container, DontMissWrapper, Left, Right } from './dont-miss.styles';

/* eslint-disable-next-line */
export interface DontMissProps {}

export function DontMiss(props: DontMissProps) {
  return (
    <Container>
      <Title className="uppercase">Đừng bỏ lỡ</Title>
      <DontMissWrapper>
        <Left>
          <PrimaryArticles />
        </Left>
        <Right>
          <div>
            <SecondaryArticles />
          </div>
          <div>
            <SecondaryArticles />
          </div>
          <div>
            <SecondaryArticles />
          </div>
          <div>
            <SecondaryArticles />
          </div>
        </Right>
      </DontMissWrapper>
    </Container>
  );
}

export default DontMiss;
