import { ROUTES } from '@/constants/common/constant';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveFormPage = () => {
    router.push(ROUTES.FORM);
  };

  const handleChangePassword = () => {
    router.push(ROUTES.CHANGE_PASSWORD);
  };

  return { handleMoveFormPage, handleChangePassword };
};

export const useLogoutAction = () => {
  const { logoutUserMutate } = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUserMutate();
  };

  return { handleLogout };
};
