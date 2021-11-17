import { render } from '@testing-library/react';

import BestArticlesOfTheMonth from './best-articles-of-the-month';

describe('BestArticlesOfTheMonth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BestArticlesOfTheMonth />);
    expect(baseElement).toBeTruthy();
  });
});
