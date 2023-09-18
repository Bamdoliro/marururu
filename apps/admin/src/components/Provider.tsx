'use client';

import { GlobalStyle } from '@maru/theme';
import { ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { RecoilRoot } from 'recoil';

interface Props {
    children: ReactNode;
}

const Provider = ({ children }: Props) => {
    return (
        <RecoilRoot>
            <GlobalStyle />
            {children}
            <ToastContainer />
        </RecoilRoot>
    );
};

export default Provider;
