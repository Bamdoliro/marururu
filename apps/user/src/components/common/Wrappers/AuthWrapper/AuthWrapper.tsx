'use client';

import { Storage } from '@/apis/storage/storage';
import { ROUTES, TOKEN } from '@/constants/common/constant';
import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';
import { color } from '@maru/theme';
import { Confirm, Text } from '@maru/ui';
import { useOverlay } from '@toss/use-overlay';
import dayjs from 'dayjs';
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
            router.push(ROUTES.MAIN);
        }
        if (token) {
            if (LOGGEDIN_PRIVATE_PAGE.includes(pathName)) {
                router.push(ROUTES.MAIN);
                return;
            }
            if (pathName === ROUTES.FORM) {
                if (dayjs().isBefore(제출_시작_날짜) || dayjs().isAfter(제출_마감_날짜)) {
                    overlay.open(({ isOpen, close }) => (
                        <Confirm
                            isOpen={isOpen}
                            title="원서 접수 기간이 아니에요!"
                            content={
                                <Text color={color.gray900} fontType="p2">
                                    원서 접수 기간에 접속이 가능해요!
                                </Text>
                            }
                            onClose={() => {
                                router.push(ROUTES.MAIN);
                                close();
                            }}
                            onConfirm={() => {
                                router.push(ROUTES.MAIN);
                                close();
                            }}
                        />
                    ));
                    router.push(ROUTES.MAIN);
                }
            }
        }
    }, [token, pathName, overlay, router]);

    return <>{children}</>;
};

export default AuthWrapper;
