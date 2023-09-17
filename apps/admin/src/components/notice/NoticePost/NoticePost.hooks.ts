import { usePostNoticeMutation } from '@/services/notice/mutations';
import { PostNoticeReq } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNoticeReq) => {
    const { postNoticeMutate } = usePostNoticeMutation(noticeData);

    const handleNoticePostButtonClick = () => {
        postNoticeMutate();
    };

    return { handleNoticePostButtonClick };
};
