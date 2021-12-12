import { render } from '@testing-library/react';

import CategoryDropdown from './category-dropdown';

describe('CategoryDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
