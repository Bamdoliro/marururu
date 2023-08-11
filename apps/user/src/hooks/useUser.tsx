import { useUserQuery } from '@/services/user/queries';
import { usePathname, useRouter } from 'next/navigation';
import { useUserState } from './state/useUserState';
import { useEffect } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { Confirm, Text } from '@maru/ui';
import ROUTES from '@/constants/routes';
import { color } from '@maru/theme';

const useUser = () => {
    const router = useRouter();
    const pathName = usePathname();
    const overlay = useOverlay();
    const { user, setUser } = useUserState();
    const { data: userData, isLoading } = useUserQuery();

    useEffect(() => {
        if (userData) setUser(userData);
    }, [setUser, userData]);

    useEffect(() => {
        // 로그인 해야 접근이 가능한 페이지
        if (pathName === ROUTES.FORM) {
            if (!isLoading && !userData) {
                overlay.open(({ isOpen, close }) => (
                    <Confirm
                        isOpen={isOpen}
                        title="로그인"
                        desc="이 페이지는 로그인이 필요한 페이지입니다."
                        content={
                            <>
                                <Text color={color.gray900} fontType="p2">
                                    로그인하지 않으면 접근할 수 없어요.
                                </Text>
                                <Text color={color.gray900} fontType="p2">
                                    로그인 후에 편리하게 서비스를 이용하실 수 있습니다.
                                </Text>
                            </>
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
        }
    }, [isLoading, router, userData]);

    return { user, isLogined: !!userData };
};

export default useUser;
