import { render } from '@testing-library/react';

import UITitle from './title';

describe('UITitle', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UITitle children="test" />);
    expect(baseElement).toBeTruthy();
  });
});
