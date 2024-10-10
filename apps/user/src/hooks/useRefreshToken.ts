import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { useAccessTokenStore } from '@/store/auth/auth';
import { Session } from '@/apis/session/session';
import { refreshToken } from '@/apis/token';
import { ROUTES } from '@/constants/common/constant';

const useRefreshToken = () => {
  const router = useRouter();
  const [accessToken, setAccessToken] = useAccessTokenStore();
  const refreshingRef = useRef(false);
  const token = Session.getRefreshToken();

  useEffect(() => {
    const checkAndRefreshToken = async () => {
      if (token) {
        if (!accessToken && !refreshingRef.current) {
          refreshingRef.current = true;
          try {
            await refreshToken(setAccessToken);
          } catch (error) {
            router.push(ROUTES.MAIN);
            sessionStorage.clear();
          } finally {
            refreshingRef.current = false;
          }
        }
      }
    };

    checkAndRefreshToken();
  }, [accessToken, setAccessToken, router, token]);
};

export default useRefreshToken;
