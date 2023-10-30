import { ROUTES } from '@/constants/common/constant';
import { useUser } from '@/hooks';
import { useOverlay } from '@toss/use-overlay';
import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import FormPeriodModal from './FormPeriodModal/FormPeriodModal';
import LoginRequiredModal from './LoginRequiredModal/LoginRequiredModal';

interface Props {
  children: ReactNode;
}

const NOT_LOGGEDIN_PRIVATE_PAGE: string[] = [
  ROUTES.FORM,
  ROUTES.FIRST_RESULT,
  ROUTES.FINAL_RESULT,
];
const LOGGEDIN_PRIVATE_PAGE: string[] = [ROUTES.LOGIN, ROUTES.SIGNUP];

const AuthWrapper = ({ children }: Props) => {
  const router = useRouter();
  const pathName = usePathname();
  const overlay = useOverlay();
  const { isLoggedIn } = useUser();

  const openRequiredLoginModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <LoginRequiredModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  const openFormPeriodModal = useCallback(() => {
    overlay.open(({ isOpen, close }) => (
      <FormPeriodModal isOpen={isOpen} onClose={close} />
    ));
  }, [overlay]);

  useEffect(() => {
    // 로그인이 되었을때
    if (isLoggedIn) {
      if (LOGGEDIN_PRIVATE_PAGE.includes(pathName)) {
        openFormPeriodModal();
        router.push(ROUTES.MAIN);
      }
      // else if (dayjs().isBefore(제출_시작_날짜) || dayjs().isAfter(제출_마감_날짜)) {
      //     if (pathName === ROUTES.FORM) {
      //         router.push(ROUTES.MAIN);
      //     } else if (pathName === ROUTES.FIRST_RESULT || pathName === ROUTES.FINAL_RESULT) {
      //         router.push(ROUTES.MAIN);
      //     }
      // }
    }
    // 로그인이 되지 않았을때
    else {
      if (NOT_LOGGEDIN_PRIVATE_PAGE.includes(pathName)) {
        openRequiredLoginModal();
        router.push(ROUTES.MAIN);
      }
    }
  }, [isLoggedIn, openFormPeriodModal, openRequiredLoginModal, pathName, router]);

  return <>{children}</>;
};

export default AuthWrapper;
