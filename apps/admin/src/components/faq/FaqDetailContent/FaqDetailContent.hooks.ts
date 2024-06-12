import { useDeleteFaqMutation } from '@/services/faq/mutations';

export const useFaqDeleteAction = (id: number) => {
  const { deleteFaqMutate } = useDeleteFaqMutation(id);

  const handleDeleteFaqButtonClick = () => {
    deleteFaqMutate();
  };

  return { handleDeleteFaqButtonClick };
};
