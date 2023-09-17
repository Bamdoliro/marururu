import { useNoticePostMutation } from '@/services/notice/mutations';
import { PostNoticeReq } from '@/types/notice/remote';

export const useNoticePostAction = (noticeData: PostNoticeReq) => {
    const { postNoticeMutate } = useNoticePostMutation(noticeData);

    const handleNoticePostButtonClick = () => {
        postNoticeMutate();
    };

    return { handleNoticePostButtonClick };
};
