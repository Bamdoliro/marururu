import { useNoticeEditMutation } from '@/services/notice/mutations';
import { PutNoticeReq } from '@/types/notice/remote';

export const useNotieEditAction = (id: number, noticeData: PutNoticeReq) => {
    const { editNoticeMutate } = useNoticeEditMutation(id, noticeData);

    const handleNoticeEditButtonClick = () => {
        editNoticeMutate();
    };

    return {
        handleNoticeEditButtonClick,
    };
};
