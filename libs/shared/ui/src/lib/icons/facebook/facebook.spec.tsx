import { render } from '@testing-library/react';

import Facebook from './facebook';

describe('Facebook', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Facebook />);
    expect(baseElement).toBeTruthy();
  });
});
