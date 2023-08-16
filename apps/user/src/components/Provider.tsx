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
        <RecoilRoot>
            <OverlayProvider>
                <GlobalStyle />
                {children}
            </OverlayProvider>
        </RecoilRoot>
    );
};

export default Provider;
