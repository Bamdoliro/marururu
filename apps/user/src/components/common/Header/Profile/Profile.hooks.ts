import { ROUTES } from '@/constants/common/constant';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
    const router = useRouter();

    const handleGoFormPageButtonClick = () => {
        router.push(ROUTES.FORM);
    };

    return { handleGoFormPageButtonClick };
};

export const useLogoutAction = () => {
    const { logoutUserMutate } = useLogoutUserMutation();

    const handleLogoutButtonClick = () => {
        logoutUserMutate();
    };

    return { handleLogoutButtonClick };
};
