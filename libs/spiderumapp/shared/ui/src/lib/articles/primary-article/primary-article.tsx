import styled from 'styled-components';

/* eslint-disable-next-line */
export interface PrimaryArticlesProps {}

const StyledPrimaryArticles = styled.div`
  color: pink;
`;

export function PrimaryArticles(props: PrimaryArticlesProps) {
  return (
    <StyledPrimaryArticles>
      <h1>Welcome to PrimaryArticles!</h1>
    </StyledPrimaryArticles>
  );
}

export default PrimaryArticles;
