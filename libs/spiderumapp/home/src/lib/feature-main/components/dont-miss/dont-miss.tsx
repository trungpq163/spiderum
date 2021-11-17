import styled from 'styled-components';

/* eslint-disable-next-line */
export interface DontMissProps {}

const StyledDontMiss = styled.div`
  color: pink;
`;

export function DontMiss(props: DontMissProps) {
  return (
    <StyledDontMiss>
      <h1>Welcome to DontMiss!</h1>
    </StyledDontMiss>
  );
}

export default DontMiss;
