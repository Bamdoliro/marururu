import React, { useEffect, useState } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const withAuth = (Component: React.ComponentType) => {
  const WrappedComponent = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const accessToken = Storage.getItem(TOKEN.ACCESS);

    useEffect(() => {
      if (typeof window !== 'undefined') {
        setMounted(true);
      }
    }, []);

    useEffect(() => {
      if (mounted && !accessToken) {
        alert('이용하시려면 로그인이 필요합니다.');
        router.push(ROUTES.LOGIN);
      }
    }, [mounted, accessToken]);
    return <Component />;
  };

  return WrappedComponent;
};

export default withAuth;
