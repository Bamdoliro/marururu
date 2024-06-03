import { useEffect } from 'react';
import { Storage } from '@/apis/storage/storage';
import { TOKEN, ROUTES } from '@/constants/common/constant';

export const useCheckAuth = () => {
  useEffect(() => {
    const checkAuth = async () => {
      if (typeof window !== 'undefined') {
        const accessToken = Storage.getItem(TOKEN.ACCESS);
        if (!accessToken) {
          alert('이용하시려면 로그인이 필요합니다.');
          window.location.href = ROUTES.LOGIN;
        }
      }
    };
    checkAuth();
  }, []);
};
