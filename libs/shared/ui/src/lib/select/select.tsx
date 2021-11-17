import styled from 'styled-components';

/* eslint-disable-next-line */
export interface SelectProps {}

const StyledSelect = styled.div`
  color: pink;
`;

export function Select(props: SelectProps) {
  return (
    <StyledSelect>
      <h1>Welcome to Select!</h1>
    </StyledSelect>
  );
}

export default Select;
