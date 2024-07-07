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
      const notAdmissionProcess = !(
        now.isBetween(제출_시작_날짜, 제출_마감_날짜) ||
        now.isBetween(이차_전형_시작, 이차_전형_끝) ||
        now.isBetween(일차_합격_발표, 최종_합격_발표) ||
        now.isBetween(입학_등록_기간, 입학_등록_기간_마감)
      );

      if (isMounted) {
        if (notAdmissionProcess) {
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

export default withFormManageAuth;
