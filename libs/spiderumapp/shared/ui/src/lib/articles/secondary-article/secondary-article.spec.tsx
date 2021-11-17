import { render } from '@testing-library/react';

import SecondaryArticles from './secondary-article';

describe('SecondaryArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SecondaryArticles />);
    expect(baseElement).toBeTruthy();
  });
});
