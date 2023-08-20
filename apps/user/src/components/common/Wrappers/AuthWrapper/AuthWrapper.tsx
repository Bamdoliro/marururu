'use client';

import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { color } from '@maru/theme';
import { Column, Confirm, Text } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const NOT_LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.FORM];
const LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.LOGIN, ROUTES.SIGNUP];

interface PropsType {
    children: ReactNode;
}

const AuthWrapper = ({ children }: PropsType) => {
    const router = useRouter();
    const pathName = usePathname();
    const overlay = useOverlay();

    const token = Storage.getItem(TOKEN.ACCESS);

    useEffect(() => {
        if (NOT_LOGGEDIN_PRIVATE_PAGE.includes(pathName) && !token) {
            router.push(ROUTES.MAIN);
            overlay.open(({ isOpen, close }) => (
                <Confirm
                    isOpen={isOpen}
                    title="로그인"
                    desc="이 페이지는 로그인이 필요한 페이지입니다."
                    content={
                        <Column>
                            <Text color={color.gray900} fontType="p2">
                                로그인하지 않으면 접근할 수 없어요.
                            </Text>
                            <Text color={color.gray900} fontType="p2">
                                로그인 후에 편리하게 서비스를 이용하실 수 있습니다.
                            </Text>
                        </Column>
                    }
                    onClose={() => {
                        router.push(ROUTES.MAIN);
                        close();
                    }}
                    onConfirm={() => router.push(ROUTES.LOGIN)}
                    confirmButtonText="로그인 하러 가기"
                />
            ));
        }

        if (token) {
            if (LOGGEDIN_PRIVATE_PAGE.includes(pathName)) {
                router.push(ROUTES.MAIN);
            }
        }
    }, [token, pathName]);

    return <>{children}</>;
};

export default AuthWrapper;
