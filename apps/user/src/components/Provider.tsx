'use client';

import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@maru/theme';
import { ModalProvider } from '@/utils';
import { ReactNode } from 'react';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
    return (
        <RecoilRoot>
            <GlobalStyle />
            {children}
            <ModalProvider />
        </RecoilRoot>
    );
};

export default Provider;
