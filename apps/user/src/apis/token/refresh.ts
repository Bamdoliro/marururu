import { ROUTES, TOKEN } from '@/constants/common/constant';
import { maru } from '../instance/instance';
import { Cookie } from '../cookie/cookie';
import { Storage } from '../storage/storage';

const refreshToken = async () => {
  const refreshTokenValue = Cookie.getItem(TOKEN.REFRESH);

  if (!refreshTokenValue) {
    alert('다시 로그인 해주세요.');
    window.location.href = ROUTES.LOGIN;
    localStorage.clear();
    return;
  }

  const { data } = await maru.patch('/auth', null, {
    headers: {
      'Refresh-Token': refreshTokenValue,
    },
  });
  Storage.setItem(TOKEN.ACCESS, data.data.accessToken);
};

export default refreshToken;
