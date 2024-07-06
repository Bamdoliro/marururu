import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { useLoginCheckQuery } from '@/services/auth/queries';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import NeedLoginModal from '@/components/main/NeedLoginModal/NeedLoginModal';
import GuardFormModal from '@/components/main/GuardFormModal/GuardFormModal';
import { useOverlay } from '@toss/use-overlay';
import { 제출_마감_날짜, 제출_시작_날짜 } from '@/constants/form/constant';

dayjs.extend(isBetween);

const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const { data } = useLoginCheckQuery();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Boolean(Storage.getItem(TOKEN.ACCESS));
    const loginType = data?.data.authority;
    const overlay = useOverlay();
    const now = dayjs();

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);
    useEffect(() => {
      if (isMounted) {
        if (!now.isBetween(제출_시작_날짜, 제출_마감_날짜)) {
          overlay.open(({ isOpen, close }) => (
            <GuardFormModal isOpen={isOpen} onClose={close} />
          ));
          return;
        } else if (loginType === 'ADMIN') {
          alert('권한이 없어 원서 작성이 불가합니다.');
          router.replace(ROUTES.MAIN);
        } else if (!hasAccessToken) {
          overlay.open(({ isOpen, close }) => (
            <NeedLoginModal isOpen={isOpen} onClose={close} />
          ));
        } else if (loginType === undefined || loginType === null) {
          alert('로그인 정보가 없습니다.');
          router.replace(ROUTES.MAIN);
          localStorage.clear();
        }
      }
    }, [isMounted, hasAccessToken, router, now, loginType, overlay]);
    return <Component />;
  };
  return WrappedComponent;
};

export default withAuth;
