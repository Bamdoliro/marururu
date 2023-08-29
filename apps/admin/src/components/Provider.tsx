'use client';

import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface Props {
    children: ReactNode;
}

const Provider = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <GlobalStyle />
            {children}
        </RecoilRoot>
    );
};

export default Provider;
