'use client';

import { GlobalStyle } from '@maru/design-token';
import { Loader } from '@maru/ui';
import { Suspensive, SuspensiveProvider } from '@suspensive/react';
import { OverlayProvider } from '@toss/use-overlay';
import type { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
  children: ReactNode;
}

const suspensive = new Suspensive({
  defaultOptions: {
    suspense: {
      fallback: <Loader />,
    },
  },
});

const Provider = ({ children }: Props) => {
  return (
    <SuspensiveProvider value={suspensive}>
      <RecoilRoot>
        <OverlayProvider>
          <GlobalStyle />
          {children}
        </OverlayProvider>
      </RecoilRoot>
    </SuspensiveProvider>
  );
};

export default Provider;
