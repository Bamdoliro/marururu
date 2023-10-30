import { useApiError } from '@/hooks';
import { useSetIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import { useSetSecondRoundResultStore } from '@/store/form/secondRoundResult';
import { PatchSecondRoundResultReq } from '@/types/form/remote';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { patchFinalScore, patchSecondRoundResult, patchSecondScoreFormat } from './api';
import { useFormListQuery } from './queries';

import { ApprovalStatus } from '@/types/form/client';

export const useUploadSecondScoreFormatMutation = (
  removeFileAndCloseModal: () => void
) => {
  const { handleError } = useApiError();

  const { mutate: uploadSecondScoreFormat, ...restMutation } = useMutation({
    mutationFn: (formData: FormData) => patchSecondScoreFormat(formData),
    onSuccess: () => {
      toast('파일이 입력되었습니다.', { type: 'success' });

      removeFileAndCloseModal();
    },
    onError: handleError,
  });

  return { uploadSecondScoreFormat, ...restMutation };
};

export const useEditSecondRoundResultMutation = (
  secondRoundResultData: PatchSecondRoundResultReq
) => {
  const { handleError } = useApiError();

  const setIsSecondRoundResultEditing = useSetIsSecondRoundResultEditingStore();
  const setSecondRoundResult = useSetSecondRoundResultStore();

  const { refetch } = useFormListQuery();

  const { mutate: editSecondRoundResult, ...restMutation } = useMutation({
    mutationFn: () => patchSecondRoundResult(secondRoundResultData),
    onSuccess: () => {
      toast('2차 합격 여부가 반영되었습니다.', {
        type: 'success',
      });
      refetch();
      setIsSecondRoundResultEditing(false);
      setSecondRoundResult({});
    },
    onError: handleError,
  });

  return { editSecondRoundResult, restMutation };
};
export const useChangeFinalScoreStatusMutation = (
  id: number,
  status: ApprovalStatus,
  closeModal: () => void
) => {
  const { handleError } = useApiError();
  const { mutate: changeFinalScoreStatus, ...restMutation } = useMutation({
    mutationFn: () => patchFinalScore(id, status),
    onSuccess: () => {
      toast('최종 점수 상태가 변경되었습니다.', { type: 'success' });
      closeModal();
    },
    onError: handleError,
  });
  return { changeFinalScoreStatus, ...restMutation };
};
