import { useNoticeDeleteMutation } from '@/services/notice/mutations';

export const useNoticeDeleteAction = (id: number) => {
    const { deleteNoticeMutate } = useNoticeDeleteMutation(id);

    const handleNoticeDeleteButtonClick = () => {
        deleteNoticeMutate();
    };

    return { handleNoticeDeleteButtonClick };
};
