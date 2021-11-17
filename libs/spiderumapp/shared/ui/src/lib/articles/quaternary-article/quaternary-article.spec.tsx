import { render } from '@testing-library/react';

import QuaternaryArticles from './quaternary-article';

describe('QuaternaryArticles', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<QuaternaryArticles />);
    expect(baseElement).toBeTruthy();
  });
});
