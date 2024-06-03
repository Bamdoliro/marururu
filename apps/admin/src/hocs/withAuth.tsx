import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';

export const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const [mounted, setMounted] = useState(false);
    const [accessToken, setAccessToken] = useState<string | null>(null);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setAccessToken(Storage.getItem(TOKEN.ACCESS));
        setMounted(true);
      }
    }, []);

    useEffect(() => {
      if (mounted && !accessToken) {
        alert('이용하시려면 로그인이 필요합니다.');
        window.location.href = ROUTES.LOGIN;
      }
    }, [mounted, accessToken]);
    return <Component />;
  };

  return WrappedComponent;
};

export default withAuth;
