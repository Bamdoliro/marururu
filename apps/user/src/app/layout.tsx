import Provider from '@/components/Provider';
import QueryClientProvider from '@/services/QueryClientProvider';
import Script from 'next/script';
import { ReactNode } from 'react';

export const metadata = {
    title: '부산소프트웨어마이스터고 입학전형 | 마루',
    description: '부산소프트웨어마이스터고등학교 입학전형 시스템 마루입니다.',
};

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {
    return (
        <html lang="ko">
            <head>
                <Script
                    async
                    src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
                />
                <Script>
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `}
                </Script>
            </head>
            <body>
                <QueryClientProvider>
                    <Provider>{children}</Provider>
                </QueryClientProvider>
            </body>
        </html>
    );
};

export default Layout;
