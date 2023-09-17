import { useFaqPostMutation } from '@/services/faq/mutations';
import { PostFaqReq } from '@/types/faq/remote';

export const useFaqPostAction = (faqData: PostFaqReq) => {
    const { postFaqMutate } = useFaqPostMutation(faqData);

    const handleFaqPostButtonClick = () => {
        postFaqMutate();
    };

    return { handleFaqPostButtonClick };
};
