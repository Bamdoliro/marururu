'use client';

import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { color } from '@maru/theme';
import { Confirm, Text } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import { usePathname, useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const NOT_LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.FORM, ROUTES.FIRST_RESULT, ROUTES.FINAL_RESULT];
const LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.LOGIN, ROUTES.SIGNUP];

interface Props {
    children: ReactNode;
}

const AuthWrapper = ({ children }: Props) => {
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
                    title="로그인 필요"
                    content={
                        <Text color={color.gray900} fontType="p2">
                            로그인 후에 편리하게 서비스를 이용하실 수 있습니다.
                        </Text>
                    }
                    onClose={() => {
                        router.push(ROUTES.MAIN);
                        close();
                    }}
                    onConfirm={() => {
                        router.push(ROUTES.LOGIN);
                        close();
                    }}
                    confirmButtonText="로그인 하러 가기"
                    height={280}
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
