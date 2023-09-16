import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import { PostNoticeReq } from '@/types/notice/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postNotice } from './api';

export const useNoticePostMutation = ({ title, content }: PostNoticeReq) => {
    const { handleError } = useApiError();
    const router = useRouter();

    const { mutate: noticePostMutate, ...restMutation } = useMutation({
        mutationFn: () => postNotice({ title, content }),
        onSuccess: ({ data }) => {
            alert('공지사항 작성이 완료되었습니다');
            router.push(`${ROUTES.NOTICE}/${data.id}`);
        },
        onError: handleError,
    });

    return { noticePostMutate, ...restMutation };
};
