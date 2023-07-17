import ROUTES from '@/constants/routes';
import TOKEN from '@/constants/token';
import { useRouter } from 'next/navigation';
import { maru } from '../instance/instance';
import { Storage } from '../storage/storage';

const refreshToken = async () => {
    const router = useRouter();

    try {
        const { data } = await maru.patch('/auth', null, {
            headers: {
                'Refresh-Token': `${Storage.getItem(TOKEN.REFRESH)}`,
            },
        });
        Storage.setItem(TOKEN.ACCESS, data.accessToken);
    } catch {
        alert('다시 로그인 해주세요');
        localStorage.clear();
        router.push(ROUTES.LOGIN);
    }
};

export default refreshToken;
