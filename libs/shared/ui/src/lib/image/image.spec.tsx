import { render } from '@testing-library/react';

import Image from './image';

describe('Image', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Image name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
