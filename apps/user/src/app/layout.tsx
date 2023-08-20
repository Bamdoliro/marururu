import { ReactNode } from 'react';
import { QueryClientProvider, Provider, AuthProvider } from '@/components/providers';

export const metadata = {
    title: '마루',
    description: '부산소프트웨어마이스터고등학교 입학전형 시스템 마루입니다',
};

interface PropsType {
    children: ReactNode;
}

const RootLayout = ({ children }: PropsType) => {
    return (
        <html lang="en">
            <body>
                <QueryClientProvider>
                    <Provider>
                        <AuthProvider>{children}</AuthProvider>
                    </Provider>
                </QueryClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
