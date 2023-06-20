'use client';

import { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import GlobalStyle from '@maru/global-style/src/global';

interface PropsType {
    children: ReactNode;
}

const Provider = ({ children }: PropsType) => {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <GlobalStyle />
            {children}
        </QueryClientProvider>
    );
};

export default Provider;
