import { ROUTES } from '@/constants/common/constant';
import { useChangeFinalScoreStatusMutation } from '@/services/form/mutations';
import type { ApprovalStatus } from '@/types/form/client';

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
    window.location.href = ROUTES.MAIN;
  };

  return { handleChangeFinalScoreStatusButtonClick };
};
