'use client';

import { GlobalStyle } from '@maru/theme';
import { Loader } from '@maru/ui';
import { Suspensive, SuspensiveProvider } from '@suspensive/react';
import { OverlayProvider } from '@toss/use-overlay';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';
import { AuthWrapper } from './common';

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
                    <AuthWrapper>
                        <GlobalStyle />
                        {children}
                    </AuthWrapper>
                </OverlayProvider>
            </RecoilRoot>
        </SuspensiveProvider>
    );
};

export default Provider;
