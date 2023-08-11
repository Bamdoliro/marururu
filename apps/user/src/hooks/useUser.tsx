import { useUserQuery } from '@/services/user/queries';
import { useRouter } from 'next/navigation';
import { useUserState } from './state/useUserState';
import { useEffect } from 'react';
import { useOverlay } from '@toss/use-overlay';
import { Confirm, Text } from '@maru/ui';
import ROUTES from '@/constants/routes';
import { color } from '@maru/theme';

const useUser = () => {
    const router = useRouter();
    const overlay = useOverlay();
    const { user, setUser } = useUserState();
    const { data: userData, isLoading } = useUserQuery();

    useEffect(() => {
        if (userData) setUser(userData);
    }, [setUser, userData]);

    useEffect(() => {
        overlay.open(({ isOpen, close }) => (
            <Confirm
                isOpen={isOpen}
                title="로그인"
                content={
                    <>
                        <Text color={color.gray900} fontType="p2">
                            로그인이 필요한 페이지입니다.
                        </Text>
                        <Text color={color.gray900} fontType="p2">
                            로그인 후 이용해주세요.
                        </Text>
                    </>
                }
                onClose={close}
                onConfirm={() => router.push(ROUTES.LOGIN)}
                confirmButtonText="로그인 하러 가기"
            />
        ));
    }, [isLoading, router, userData]);

    return { user, isLogined: !!userData };
};

export default useUser;
