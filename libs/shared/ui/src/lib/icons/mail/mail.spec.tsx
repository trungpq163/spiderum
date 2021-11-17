import { render } from '@testing-library/react';

import Mail from './mail';

describe('Mail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Mail />);
    expect(baseElement).toBeTruthy();
  });
});
