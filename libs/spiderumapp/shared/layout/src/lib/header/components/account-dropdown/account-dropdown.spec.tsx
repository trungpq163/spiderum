import { render } from '@testing-library/react';

import AccountDropdown from './account-dropdown';

describe('AccountDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AccountDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
