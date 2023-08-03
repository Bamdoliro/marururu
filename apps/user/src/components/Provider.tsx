'use client';

import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';
import { useModalState } from '@/hooks/state/useModalState';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
    const { modal } = useModalState();

    return (
        <RecoilRoot>
            <GlobalStyle />
            {children}
            {!modal && <>{modal}</>}
        </RecoilRoot>
    );
};

export default Provider;
