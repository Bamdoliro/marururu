import { ROUTES } from '@/constants/common/constant';
import { useChangeFinalScoreStatusMutation } from '@/services/form/mutations';
import type { ApprovalStatus } from '@/types/form/client';
import { useRouter } from 'next/navigation';

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

  const router = useRouter();

  const handleChangeFinalScoreStatusButtonClick = () => {
    changeFinalScoreStatus();
    router.push(ROUTES.MAIN);
  };

  return { handleChangeFinalScoreStatusButtonClick };
};
