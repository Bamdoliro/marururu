import { ROUTES } from '@/constants/common/constant';
import { useSetFormStepStore } from '@/store';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();
  const setFormStep = useSetFormStepStore();

  const handleGoMainPageButtonClick = () => {
    router.push(ROUTES.MAIN);
  };

  const handleGo최종제출PageButtonClick = () => {
    setFormStep('최종제출');
  };

  return { handleGoMainPageButtonClick, handleGo최종제출PageButtonClick };
};
