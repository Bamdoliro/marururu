import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import NeedLoginModal from '@/components/main/NeedLoginModal/NeedLoginModal';
import GuardFormModal from '@/components/main/GuardFormModal/GuardFormModal';
import { useOverlay } from '@toss/use-overlay';
import {
  이차_전형_끝,
  이차_전형_시작,
  일차_합격_발표,
  입학_등록_기간,
  입학_등록_기간_마감,
  제출_마감_날짜,
  제출_시작_날짜,
  최종_합격_발표,
} from '@/constants/form/constant';
import { useLoginCheckQuery } from '@/services/auth/queries';

dayjs.extend(isBetween);

const withFormManageAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const { data, error, isLoading } = useLoginCheckQuery();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Storage.getItem(TOKEN.ACCESS);
    const hasRefreshToken = Storage.getItem(TOKEN.REFRESH);
    const loginType = data?.data.authority;
    const overlay = useOverlay();
    const now = dayjs();

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);

    useEffect(() => {
      if (!isMounted || isLoading) return;

      if (error) {
        alert('로그인 체크 중 오류가 발생했습니다.');
        router.replace(ROUTES.MAIN);
        return;
      }

      const notAdmissionProcess = !(
        now.isBetween(제출_시작_날짜, 제출_마감_날짜) ||
        now.isBetween(이차_전형_시작, 이차_전형_끝) ||
        now.isBetween(일차_합격_발표, 최종_합격_발표) ||
        now.isBetween(입학_등록_기간, 입학_등록_기간_마감)
      );

      if (notAdmissionProcess) {
        overlay.open(({ isOpen, close }) => (
          <GuardFormModal isOpen={isOpen} onClose={close} />
        ));
        return;
      } else if (loginType === 'ADMIN') {
        alert('권한이 없어 원서 작성이 불가합니다.');
        router.replace(ROUTES.MAIN);
        return;
      } else if (!hasAccessToken && !hasRefreshToken) {
        overlay.open(({ isOpen, close }) => (
          <NeedLoginModal isOpen={isOpen} onClose={close} />
        ));
        return;
      } else if (!loginType) {
        alert('로그인 정보가 없습니다.');
        router.replace(ROUTES.MAIN);
        localStorage.clear();
        return;
      }
    }, [
      isMounted,
      isLoading,
      error,
      hasAccessToken,
      hasRefreshToken,
      router,
      now,
      loginType,
      overlay,
    ]);

    return <Component />;
  };
  return WrappedComponent;
};

export default withFormManageAuth;
