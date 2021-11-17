import { render } from '@testing-library/react';

import Svg from './svg';

describe('Svg', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Svg name="test" />);
    expect(baseElement).toBeTruthy();
  });
});
