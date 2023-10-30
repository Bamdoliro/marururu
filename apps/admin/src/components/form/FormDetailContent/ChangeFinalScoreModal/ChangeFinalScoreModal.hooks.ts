import { useChangeFinalScoreStatusMutation } from '@/services/form/mutations';
import { ApprovalStatus } from '@/types/form/client';

export const useChangeFinalScoreStatusAction = (
  id: number,
  status: ApprovalStatus,
  closeModal: () => void
) => {
  const { changeFinalScoreStatus } = useChangeFinalScoreStatusMutation(
    id,
    status,
    closeModal
  );

  const handleChangeFinalScoreStatusButtonClick = () => {
    changeFinalScoreStatus();
  };

  return { handleChangeFinalScoreStatusButtonClick };
};
