import { Storage } from '@/apis/storage/storage';
import ROUTES from '@/constants/routes';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';

export const useLogoutUserAction = () => {
    const { logoutUserMutate } = useLogoutUserMutation();
    const router = useRouter();

    const handleLogoutButtonClick = () => {
        logoutUserMutate();
        Storage.setItem('access-token', '');
        Storage.setItem('refresh-token', '');
        window.location.href = ROUTES.MAIN;
    };

    return { handleLogoutButtonClick };
};
