import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { useLoginCheckQuery } from '@/services/auth/queries';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';
import { useCookies } from 'react-cookie';

const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const { data } = useLoginCheckQuery();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Boolean(Storage.getItem(TOKEN.ACCESS));
    const LOGIN_TYPE = data?.data.authority;
    const [, , removeCookie] = useCookies(['access-token', 'refresh-token']);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);

    useEffect(() => {
      if (isMounted && LOGIN_TYPE === 'USER') {
        alert('어드민 계정으로만 접속이 가능합니다.');
        removeCookie('access-token', { path: '/' });
        removeCookie('refresh-token', { path: '/' });
        router.replace(ROUTES.MAIN);
      }
    }, [isMounted, hasAccessToken, router, LOGIN_TYPE, removeCookie]);
    return <Component />;
  };

  return WrappedComponent;
};

export default withAuth;
