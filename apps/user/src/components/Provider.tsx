'use client';

import { RecoilRoot } from 'recoil';
import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
    return (
        <RecoilRoot>
            {children}
            <GlobalStyle />
        </RecoilRoot>
    );
};

export default Provider;
