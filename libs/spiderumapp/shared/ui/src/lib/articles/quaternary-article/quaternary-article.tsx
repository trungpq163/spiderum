import styled from 'styled-components';

/* eslint-disable-next-line */
export interface QuaternaryArticlesProps {}

const StyledQuaternaryArticles = styled.div`
  color: pink;
`;

export function QuaternaryArticles(props: QuaternaryArticlesProps) {
  return (
    <StyledQuaternaryArticles>
      <h1>Welcome to QuaternaryArticles!</h1>
    </StyledQuaternaryArticles>
  );
}

export default QuaternaryArticles;
