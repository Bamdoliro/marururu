'use client';

import { GlobalStyle } from '@maru/theme';
import { OverlayProvider } from '@toss/use-overlay';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

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
