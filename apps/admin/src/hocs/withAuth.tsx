import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { useLoginCheckQuery } from '@/services/auth/queries';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const { data } = useLoginCheckQuery();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Boolean(Storage.getItem(TOKEN.ACCESS));
    const LOGIN_TYPE = data?.data.authority;

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);

    useEffect(() => {
      if (isMounted && LOGIN_TYPE === 'USER') {
        alert('잘못된 접근 입니다.');
        router.replace(ROUTES.LOGIN);
        localStorage.clear();
      } else if (isMounted && !hasAccessToken) {
        alert('이용하시려면 로그인이 필요합니다.');
        router.replace(ROUTES.LOGIN);
      }
    }, [isMounted, hasAccessToken, router]);
    return <Component />;
  };

  return WrappedComponent;
};

export default withAuth;
