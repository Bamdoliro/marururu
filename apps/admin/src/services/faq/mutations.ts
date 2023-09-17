import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostFaqReq } from '@/types/faq/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { postFaq } from './api';

export const useFaqPostMutation = (faqData: PostFaqReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: postFaqMutate, ...restMutation } = useMutation({
        mutationFn: () => postFaq(faqData),
        onSuccess: ({ data }) => {
            toast('게시물이 게시되었습니다.', {
                type: 'success',
            });
            router.push(`${ROUTES.FAQ}/${data.id}`);
        },
        onError: handleError,
    });

    return { postFaqMutate, ...restMutation };
};
