import { ROUTES } from '@/constants/common/constant';
import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';
import { useUser } from '@/hooks';
import { useOverlay } from '@toss/use-overlay';
import dayjs from 'dayjs';
import { useRouter } from 'next/router';
import { ReactNode, useEffect } from 'react';
import FormPeriodModal from './FormPeriodModal/FormPeriodModal';
import LoginRequiredModal from './LoginRequiredModal/LoginRequiredModal';

interface Props {
    children: ReactNode;
}

const NOT_LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.FORM, ROUTES.FIRST_RESULT, ROUTES.FINAL_RESULT];
const LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.LOGIN, ROUTES.SIGNUP];

const AuthWrapper = ({ children }: Props) => {
    const router = useRouter();
    const overlay = useOverlay();
    const { isLoggedIn } = useUser();

    const openRequiredLoginModal = () => {
        overlay.open(({ isOpen, close }) => <LoginRequiredModal isOpen={isOpen} onClose={close} />);
    };

    const openFormPeriodModal = () => {
        overlay.open(({ isOpen, close }) => <FormPeriodModal isOpen={isOpen} onClose={close} />);
    };

    useEffect(() => {
        if (NOT_LOGGEDIN_PRIVATE_PAGE.includes(router.pathname) && !isLoggedIn) {
            openRequiredLoginModal();
            router.push(ROUTES.MAIN);
        }
        if (isLoggedIn) {
            if (LOGGEDIN_PRIVATE_PAGE.includes(router.pathname)) {
                openFormPeriodModal();
                router.push(ROUTES.MAIN);
            } else if (
                dayjs().isBefore(제출_시작_날짜) ||
                (dayjs().isAfter(제출_마감_날짜) && process.env.NODE_ENV !== 'development')
            ) {
                if (router.pathname === ROUTES.FORM) {
                    router.push(ROUTES.MAIN);
                } else if (
                    router.pathname === ROUTES.FIRST_RESULT ||
                    router.pathname === ROUTES.FINAL_RESULT
                ) {
                    router.push(ROUTES.MAIN);
                }
            }
        }
    }, [isLoggedIn, router, overlay]);

    return <>{children}</>;
};

export default AuthWrapper;
