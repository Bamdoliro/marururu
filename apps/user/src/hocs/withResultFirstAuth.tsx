import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import NeedLoginModal from '@/components/main/NeedLoginModal/NeedLoginModal';
import { useOverlay } from '@toss/use-overlay';
import { 이차_전형_시작, 일차_합격_발표 } from '@/constants/form/constant';
import { useLoginCheckQuery } from '@/services/auth/queries';

dayjs.extend(isBetween);

const withResultFirstAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const { data, isLoading } = useLoginCheckQuery();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Boolean(Storage.getItem(TOKEN.ACCESS));
    const loginType = data?.data?.authority;
    const overlay = useOverlay();
    const now = dayjs();

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);

    useEffect(() => {
      if (!isMounted || isLoading) return;

      if (!hasAccessToken) {
        overlay.open(({ isOpen, close }) => (
          <NeedLoginModal isOpen={isOpen} onClose={close} />
        ));
      } else if (loginType === undefined || loginType === null) {
        alert('로그인 정보가 없습니다.');
        router.replace(ROUTES.MAIN);
        localStorage.clear();
      } else if (loginType === 'ADMIN') {
        alert('권한이 없어 확인이 불가합니다.');
        router.replace(ROUTES.MAIN);
      } else if (!now.isBetween(일차_합격_발표, 이차_전형_시작)) {
        alert('1차 합격 발표 일자가 아닙니다.');
        router.replace(ROUTES.MAIN);
      }
    }, [isMounted, isLoading, hasAccessToken, router, now, loginType, overlay]);

    return <Component />;
  };

  return WrappedComponent;
};

export default withResultFirstAuth;
