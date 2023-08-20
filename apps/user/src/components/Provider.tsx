'use client';

import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';
import { OverlayProvider } from '@toss/use-overlay';
import { AuthWrapper } from './common';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
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
