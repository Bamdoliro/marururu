import Provider from '@/components/Provider';
import { ReactNode } from 'react';

export const metadata = {
    title: '마루 어드민',
    description: '부산소프트웨어마이스터고등학교 입학전형 시스템 마루의 어드민 페이지입니다.',
};

interface Props {
    children: ReactNode;
}

const RootLayout = ({ children }: Props) => {
    return (
        <html lang="en">
            <body>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
};

export default RootLayout;
