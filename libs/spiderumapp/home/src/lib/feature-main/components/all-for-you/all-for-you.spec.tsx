import { render } from '@testing-library/react';

import AllForYou from './all-for-you';

describe('AllForYou', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AllForYou />);
    expect(baseElement).toBeTruthy();
  });
});
