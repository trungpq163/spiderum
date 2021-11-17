/* eslint-disable @typescript-eslint/ban-types */
// Should not depend on (feature + local) lib
import React from 'react';

interface WithLoadingProps {
  loading: boolean;
}

export const withLoading =
  <P extends object>(
    Component: React.ComponentType<P>
  ): React.FC<P & WithLoadingProps> =>
  ({ loading, ...props }: WithLoadingProps) =>
    loading ? <div>Loading......</div> : <Component {...(props as P)} />;
