import { render } from '@testing-library/react';

import DontMiss from './dont-miss';

describe('DontMiss', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DontMiss />);
    expect(baseElement).toBeTruthy();
  });
});
