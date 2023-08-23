'use client';

import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

const Provider = ({ children }: Props) => {
    return (
        <>
            <GlobalStyle />
            {children}
        </>
    );
};

export default Provider;
