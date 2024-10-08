import { ROUTES } from '@/constants/common/constant';
import { maru } from '../instance/instance';
import { Session } from '../session/session';

const refreshToken = async (setAccessToken: (newAccessToken: string) => void) => {
  try {
    const { data } = await maru.patch('/auth', null, {
      headers: {
        'Refresh-Token': `${Session.getRefreshToken()}`,
      },
    });
    setAccessToken(data.data.accessToken);
  } catch {
    window.location.href = ROUTES.LOGIN;
    alert('다시 로그인 해주세요');
    localStorage.clear();
  }
};

export default refreshToken;
