import { useCheckFormUrlMutation } from '@/services/form/queries';

export const useCheckFormStatusURLAction = () => {
  const { mutate: fetchFormUrls, isLoading } = useCheckFormUrlMutation();

  const handleCheckFormStatusUrlButtonClick = (id: number) => {
    fetchFormUrls([id]);
  };

  return { handleCheckFormStatusUrlButtonClick, isLoading };
};
