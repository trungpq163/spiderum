import { render } from '@testing-library/react';

import TertiaryArticle from './tertiary-article';

describe('TertiaryArticle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TertiaryArticle />);
    expect(baseElement).toBeTruthy();
  });
});
