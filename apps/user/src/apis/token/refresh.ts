import { LOGIN_PAGE_ROUTE } from '@/constants/routes';
import { ACCESS_KEY, REFRESH_KEY } from '@/constants/token';
import { useRouter } from 'next/navigation';
import { maru } from '../instance';
import { Storage } from '../storage';

export const refreshToken = async () => {
    const router = useRouter();

    try {
        const { data } = await maru.patch('/auth', null, {
            headers: {
                'Refresh-Token': `${Storage.getItem(REFRESH_KEY)}`,
            },
        });
        Storage.setItem(ACCESS_KEY, data.accessToken);
    } catch {
        alert('다시 로그인 해주세요');
        localStorage.clear();
        router.push(LOGIN_PAGE_ROUTE);
    }
};
