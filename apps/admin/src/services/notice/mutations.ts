import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostNoticeReq } from '@/types/notice/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postNotice } from './api';

export const useNoticePostMutation = ({ title, content }: PostNoticeReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: noticePostMutate, ...restMutation } = useMutation({
        mutationFn: () => postNotice({ title, content }),
        onSuccess: ({ data }) => {
            toast('업로드 완료', {
                type: 'success',
            });
            router.push(`${ROUTES.NOTICE}/${data.id}`);
        },
        onError: handleError,
    });

    return { noticePostMutate, ...restMutation };
};
