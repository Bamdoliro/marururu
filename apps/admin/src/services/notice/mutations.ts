import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostNoticeReq } from '@/types/notice/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { deleteNotice, postNotice } from './api';

export const useNoticePostMutation = ({ title, content }: PostNoticeReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: postNoticeMutate, ...restMutation } = useMutation({
        mutationFn: () => postNotice({ title, content }),
        onSuccess: ({ data }) => {
            toast('공지사항이 게시되었습니다.', {
                type: 'success',
            });
            router.push(`${ROUTES.NOTICE}/${data.id}`);
        },
        onError: handleError,
    });

    return { postNoticeMutate, ...restMutation };
};

export const useNoticeDeleteMutation = (id: number) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: deleteNoticeMutate, ...restMutation } = useMutation({
        mutationFn: () => deleteNotice(id),
        onSuccess: () => {
            toast('공지사항이 삭제되었습니다.', {
                type: 'success',
            });
            router.push(ROUTES.NOTICE);
        },
        onError: handleError,
    });

    return { deleteNoticeMutate, ...restMutation };
};
