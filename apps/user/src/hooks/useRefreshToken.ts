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
  const token = Session.getRefreshToken();

  useEffect(() => {
    setupInterceptor(setAccessToken);

    const checkAndRefreshToken = async () => {
      if (token) {
        if (!accessToken && !refreshingRef.current) {
          refreshingRef.current = true;
          const refreshTokenValue = Session.getRefreshToken();
          if (refreshTokenValue) {
            try {
              await refreshToken(setAccessToken);
            } catch (error) {
              router.push(ROUTES.LOGIN);
              sessionStorage.clear();
            }
          } else {
            router.push(ROUTES.LOGIN);
            sessionStorage.clear();
          }
          refreshingRef.current = false;
        }
      }
    };

    checkAndRefreshToken();
  }, [accessToken, setAccessToken, router, token]);
};

export default useRefreshToken;
