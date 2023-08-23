'use client';

import { GlobalStyle } from '@maru/theme';
import { OverlayProvider } from '@toss/use-overlay';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { AuthWrapper } from './common';

interface Props {
    children: ReactNode;
}

const Provider = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <OverlayProvider>
                <AuthWrapper>
                    <GlobalStyle />
                    {children}
                </AuthWrapper>
            </OverlayProvider>
        </RecoilRoot>
    );
};

export default Provider;
