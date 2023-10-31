import { ROUTES } from '@/constants/common/constant';
import { useSetFormStepStore } from '@/store';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
  const router = useRouter();
  const setFormStep = useSetFormStepStore();

  const handleMovewMainPage = () => {
    router.push(ROUTES.MAIN);
  };

  const handleMovew최종제출Page = () => {
    setFormStep('최종제출');
  };

  return { handleMovewMainPage, handleMovew최종제출Page };
};
