'use client';

import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';
import { OverlayProvider } from '@toss/use-overlay';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
    return (
        <OverlayProvider>
            <RecoilRoot>
                <GlobalStyle />
                {children}
            </RecoilRoot>
        </OverlayProvider>
    );
};

export default Provider;
