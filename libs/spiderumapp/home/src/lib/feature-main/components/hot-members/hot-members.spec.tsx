import { render } from '@testing-library/react';

import HotMembers from './hot-members';

describe('HotMembers', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HotMembers />);
    expect(baseElement).toBeTruthy();
  });
});
