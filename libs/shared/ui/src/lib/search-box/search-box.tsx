import { Container, Field, IconWrapper } from './search-box.styles';
import { SearchIcon } from '../icons/search/search';

/* eslint-disable-next-line */
export interface SearchBoxProps {}

export function SearchBox(props: SearchBoxProps) {
  const color = '#757575';
  return (
    <Container>
      <IconWrapper>
        <SearchIcon color={color} />
      </IconWrapper>
      <Field
        type="text"
        placeholder="Tìm kiếm ............ <3"
        aria-label="Search"
      />
    </Container>
  );
}

export default SearchBox;
