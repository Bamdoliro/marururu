import { ROUTES } from '@/constants/common/constant';
import { useRouter } from 'next/navigation';

const useCTAButton = () => {
    const router = useRouter();
    const handleGoNoticePostPageButtonClick = () => {
        router.push(ROUTES.NOTICE_POST);
    };
    return { handleGoNoticePostPageButtonClick };
};

export default useCTAButton;
