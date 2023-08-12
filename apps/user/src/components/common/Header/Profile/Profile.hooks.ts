import { useLogoutUserMutation } from '@/services/auth/mutations';

export const useLogoutUserAction = () => {
    const { logoutUserMutate } = useLogoutUserMutation();

    const handleLogoutButtonClick = () => {
        logoutUserMutate();
    };

    return { handleLogoutButtonClick };
};
