'use client';

import { GlobalStyle } from '@maru/theme';
import { OverlayProvider } from '@toss/use-overlay';
import type { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

interface Props {
  children: ReactNode;
}

const Provider = ({ children }: Props) => {
  return (
    <RecoilRoot>
      <OverlayProvider>
        <GlobalStyle />
        {children}
        <ToastContainer />
      </OverlayProvider>
    </RecoilRoot>
  );
};

export default Provider;
