import { usePostFaqMutation } from '@/services/faq/mutations';
import { PostFaqReq } from '@/types/faq/remote';

export const useFaqPostAction = (faqData: PostFaqReq) => {
    const { postFaqMutate } = usePostFaqMutation(faqData);

    const handleFaqPostButtonClick = () => {
        postFaqMutate();
    };

    return { handleFaqPostButtonClick };
};
