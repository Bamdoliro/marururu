'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider as MaruQueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

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
