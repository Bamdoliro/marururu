import { useFaqEditMutation } from '@/services/faq/mutations';
import { PutFaqReq } from '@/types/faq/remote';

export const useFaqEditAction = (id: number, faqData: PutFaqReq) => {
  const { editFaqMutate } = useFaqEditMutation(id, faqData);

  const handleFaqEditButtonClick = () => {
    editFaqMutate();
  };

  return {
    handleFaqEditButtonClick,
  };
};
