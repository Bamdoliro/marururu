import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const useCTAButton = () => {
    const router = useRouter();
    const handleGoFaqPostPageButtonClick = () => {
        router.push(ROUTES.FAQ_POST);
    };
    return { handleGoFaqPostPageButtonClick };
};

export default useCTAButton;
