import styled from 'styled-components';

/* eslint-disable-next-line */
export interface BestArticlesOfTheMonthProps {}

const StyledBestArticlesOfTheMonth = styled.div`
  color: pink;
`;

export function BestArticlesOfTheMonth(props: BestArticlesOfTheMonthProps) {
  return (
    <StyledBestArticlesOfTheMonth>
      <h1>Welcome to BestArticlesOfTheMonth!</h1>
    </StyledBestArticlesOfTheMonth>
  );
}

export default BestArticlesOfTheMonth;
