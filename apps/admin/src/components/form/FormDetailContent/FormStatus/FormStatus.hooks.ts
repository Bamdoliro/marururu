import { useCheckFormUrlMutation } from '@/services/form/mutations';

export const useCheckFormStatusURLAction = () => {
  const { checkFormUrl } = useCheckFormUrlMutation();

  const handleCheckFormStatusUrlButtonClick = (id: number) => {
    checkFormUrl(id);
  };

  return { handleCheckFormStatusUrlButtonClick };
};
