import { render } from '@testing-library/react';

import PrimaryArticles from './primary-article';

describe('PrimaryArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PrimaryArticles />);
    expect(baseElement).toBeTruthy();
  });
});
