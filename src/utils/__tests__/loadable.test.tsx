import React from 'react';
import { render } from '@testing-library/react';
import lazyLoad from 'utils/loadable';

const LoadingIndicator = () => <div>Loading</div>;

const LazyComponentWithFallback = lazyLoad(
  () => import('./__mocks__/loadable.mock'),
  <LoadingIndicator />
);

const LazyComponentWithoutFallback = lazyLoad(
  () => import('./__mocks__/loadable.mock')
);

describe('loadable', () => {
  it('should render null by default', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithoutFallback />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render fallback if given one', () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithFallback />);
    expect(firstChild).toMatchSnapshot();
  });

  it('should render LazyComponent after waiting for it to load', async () => {
    const {
      container: { firstChild },
    } = render(<LazyComponentWithFallback />);
    expect(firstChild).toMatchSnapshot();
  });
});
