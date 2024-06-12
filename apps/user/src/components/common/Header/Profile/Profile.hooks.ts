import { ROUTES } from '@/constants/common/constant';
import { useLogoutUserMutation } from '@/services/auth/mutations';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveFormPage = () => {
    router.push(ROUTES.FORM);
  };

  return { handleMoveFormPage };
};

export const useLogoutAction = () => {
  const { logoutUserMutate } = useLogoutUserMutation();

  const handleLogout = () => {
    logoutUserMutate();
  };

  return { handleLogout };
};
