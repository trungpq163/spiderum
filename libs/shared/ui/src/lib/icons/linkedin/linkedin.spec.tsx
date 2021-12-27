import { render } from '@testing-library/react';

import Linkedin from './linkedin';

describe('Linkedin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Linkedin />);
    expect(baseElement).toBeTruthy();
  });
});
