import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostNoticeReq, PutNoticeReq } from '@/types/notice/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { postNotice, putEditNotice } from './api';

export const useNoticePostMutation = ({ title, content }: PostNoticeReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: postNoticeMutate, ...restMutation } = useMutation({
        mutationFn: () => postNotice({ title, content }),
        onSuccess: ({ data }) => {
            toast('업로드 완료', {
                type: 'success',
            });
            router.push(`${ROUTES.NOTICE}/${data.id}`);
        },
        onError: handleError,
    });

    return { postNoticeMutate, ...restMutation };
};

export const useNoticeEditMutation = (id: number, { title, content }: PutNoticeReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: editNoticeMutate, ...restMutation } = useMutation({
        mutationFn: () => putEditNotice(id, { title, content }),
        onSuccess: () => {
            toast('공지사항이 수정되었습니다.', {
                type: 'success',
            });
            router.push(`${ROUTES.NOTICE}/${id}`);
        },
        onError: handleError,
    });

    return { editNoticeMutate, ...restMutation };
};
