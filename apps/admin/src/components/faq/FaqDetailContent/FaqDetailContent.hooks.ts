import { useFaqDeleteMutation } from '@/services/faq/mutations';

export const useFaqDeleteAction = (id: number) => {
    const { deleteFaqMutate } = useFaqDeleteMutation(id);

    const handleFaqDeleteButtonClick = () => {
        deleteFaqMutate();
    };

    return { handleFaqDeleteButtonClick };
};
