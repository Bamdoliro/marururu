import { useEditNoticeMutation } from '@/services/notice/mutations';
import { PutNoticeReq } from '@/types/notice/remote';

export const useNotieEditAction = (id: number, noticeData: PutNoticeReq) => {
    const { editNoticeMutate } = useEditNoticeMutation(id, noticeData);

    const handleNoticeEditButtonClick = () => {
        editNoticeMutate();
    };

    return {
        handleNoticeEditButtonClick,
    };
};
