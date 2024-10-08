import { ROUTES } from '@/constants/common/constant';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useAccessTokenValueStore } from '@/store/auth/auth';
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
  const accessToken = useAccessTokenValueStore();

  const handleLogout = () => {
    logoutUserMutate(accessToken);
  };

  return { handleLogout };
};
