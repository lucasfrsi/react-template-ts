import React, { lazy, Suspense } from 'react';

const lazyLoad = <T extends Promise<any>, U extends React.ComponentType<any>>(
  importFunc: () => T,
  fallback: React.ReactNode = null
) => {
  const lazyFactory: () => Promise<any> = importFunc;
  const LazyComponent = lazy(lazyFactory);

  return (props: React.ComponentProps<U>): JSX.Element => (
    <Suspense fallback={fallback}>
      <LazyComponent {...props} />
    </Suspense>
  );
};

export default lazyLoad;
