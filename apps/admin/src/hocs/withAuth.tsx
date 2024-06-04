import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const hasAccessToken = Boolean(Storage.getItem(TOKEN.ACCESS));

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setIsMounted(true);
      }
    }, []);

    useEffect(() => {
      if (isMounted && !hasAccessToken) {
        alert('이용하시려면 로그인이 필요합니다.');
        router.replace(ROUTES.LOGIN);
      }
    }, [isMounted, hasAccessToken]);
    return <Component />;
  };

  return WrappedComponent;
};

export default withAuth;
