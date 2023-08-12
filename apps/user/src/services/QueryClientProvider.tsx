'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider as MaruQueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface PropsType {
    children: ReactNode;
}

const QueryClientProvider = ({ children }: PropsType) => {
    const [queryClient] = useState(
        () =>
            new QueryClient({
                defaultOptions: {
                    queries: {
                        refetchOnWindowFocus: false,
                        suspense: true,
                    },
                },
            }),
    );

    return (
        <MaruQueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
        </MaruQueryClientProvider>
    );
};

export default QueryClientProvider;
