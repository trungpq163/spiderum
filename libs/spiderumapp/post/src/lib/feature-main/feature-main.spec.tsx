import { render } from '@testing-library/react';

import FeatureMain from './feature-main';

describe('FeatureMain', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureMain />);
    expect(baseElement).toBeTruthy();
  });
});
