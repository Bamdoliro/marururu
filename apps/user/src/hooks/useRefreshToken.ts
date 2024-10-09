import { setupInterceptor } from '@/apis/instance/instance';
import { Session } from '@/apis/session/session';
import { refreshToken } from '@/apis/token';
import { ROUTES } from '@/constants/common/constant';
import { useAccessTokenStore } from '@/store/auth/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useRef } from 'react';

const useRefreshToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useAccessTokenStore();
  const refreshingRef = useRef(false);

  useEffect(() => {
    setupInterceptor(setAccessToken);

    const handleLoginRedirect = () => {
      alert('다시 로그인 해주세요');
      sessionStorage.clear();
      router.push(ROUTES.LOGIN);
    };

    const checkAndRefreshToken = async () => {
      const token = Session.getRefreshToken();

      if (!accessToken && !refreshingRef.current && token) {
        refreshingRef.current = true;

        try {
          await refreshToken(setAccessToken);
        } catch (error) {
          handleLoginRedirect();
        } finally {
          refreshingRef.current = false;
        }
      } else if (!token) {
        handleLoginRedirect();
      }
    };

    checkAndRefreshToken();
  }, [accessToken, setAccessToken, router]);
};

export default useRefreshToken;
