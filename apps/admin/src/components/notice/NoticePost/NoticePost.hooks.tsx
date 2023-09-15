import { useNoticePostMutation } from '@/services/notice/mutations';
import { PostNotice } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNotice) => {
    const { noticePostMutate } = useNoticePostMutation(noticeData);

    const handlePostButtonClick = () => {
        noticePostMutate();
    };

    return { handlePostButtonClick };
};
