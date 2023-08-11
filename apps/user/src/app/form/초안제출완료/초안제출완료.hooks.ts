import ROUTES from '@/constants/routes';
import { useFormStepState } from '@/hooks';
import { useRouter } from 'next/navigation';

export const useCTAButton = () => {
    const router = useRouter();
    const { setFormStep } = useFormStepState();

    const handleGoMainPageButtonClick = () => {
        router.push(ROUTES.MAIN);
    };

    const handleGo최종제출PageButtonClick = () => {
        setFormStep('최종제출');
    };

    return { handleGoMainPageButtonClick, handleGo최종제출PageButtonClick };
};
