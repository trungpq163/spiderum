import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HotMembersProps {}

const StyledHotMembers = styled.div`
  color: pink;
`;

export function HotMembers(props: HotMembersProps) {
  return (
    <StyledHotMembers>
      <h1>Welcome to HotMembers!</h1>
    </StyledHotMembers>
  );
}

export default HotMembers;
