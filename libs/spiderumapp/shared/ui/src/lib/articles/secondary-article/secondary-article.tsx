import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SecondaryArticlesProps {}

const StyledSecondaryArticles = styled.div`
  color: pink;
`;

export function SecondaryArticles(props: SecondaryArticlesProps) {
  return (
    <StyledSecondaryArticles>
      <h1>Welcome to SecondaryArticles!</h1>
    </StyledSecondaryArticles>
  );
}

export default SecondaryArticles;
