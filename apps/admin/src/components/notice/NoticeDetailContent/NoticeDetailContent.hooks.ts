import { useDeleteNoticeMutation } from '@/services/notice/mutations';

export const useNoticeDeleteAction = (id: number) => {
  const { deleteNoticeMutate } = useDeleteNoticeMutation(id);

  const handleDeleteNoticeButtonClick = () => {
    deleteNoticeMutate();
  };

  return { handleDeleteNoticeButtonClick };
};
