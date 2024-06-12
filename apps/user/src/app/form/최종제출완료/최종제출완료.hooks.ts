import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();

  const handleMoveMainPage = () => {
    router.push(ROUTES.MAIN);
  };

  return { handleMoveMainPage };
};
