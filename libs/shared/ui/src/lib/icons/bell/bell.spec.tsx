import { render } from '@testing-library/react';

import Bell from './bell';

describe('Bell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Bell />);
    expect(baseElement).toBeTruthy();
  });
});
