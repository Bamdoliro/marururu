import { useNoticePostMutation } from '@/services/notice/mutations';
import { PostNoticeReq } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNoticeReq) => {
    const { noticePostMutate } = useNoticePostMutation(noticeData);

    const handlePostButtonClick = () => {
        noticePostMutate();
    };

    return { handlePostButtonClick };
};
