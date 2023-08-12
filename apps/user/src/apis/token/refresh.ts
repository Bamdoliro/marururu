import ROUTES from '@/constants/routes';
import TOKEN from '@/constants/token';
import { maru } from '../instance/instance';
import { Storage } from '../storage/storage';

const refreshToken = async () => {
    try {
        const { data } = await maru.patch('/auth', null, {
            headers: {
                'Refresh-Token': `${Storage.getItem('refresh-token')}`,
            },
        });
        Storage.setItem(TOKEN.ACCESS, data.accessToken);
    } catch {
        window.location.href = ROUTES.LOGIN;
        alert('다시 로그인 해주세요');
        localStorage.clear();
    }
};

export default refreshToken;
