import { useApiError } from '@/hooks';
import { useSetIsSecondRoundResultEditingStore } from '@/store/form/isSecondRoundResultEditing';
import { useSetSecondRoundResultStore } from '@/store/form/secondRoundResult';
import type { PatchSecondRoundResultReq } from '@/types/form/remote';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import {
  patchFinalScore,
  patchSecondRoundResult,
  patchSecondScoreFormat,
  getFormUrl,
} from './api';
import { useFormListQuery } from './queries';

import type { ApprovalStatus } from '@/types/form/client';

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
      toast('최종 접수 상태가 변경되었습니다.', { type: 'success' });
      closeModal();
    },
    onError: handleError,
  });
  return { changeFinalScoreStatus, ...restMutation };
};

export const useCheckFormUrlMutation = () => {
  const { handleError } = useApiError();
  const { mutate: checkFormUrl, ...restMutation } = useMutation({
    mutationFn: (formId: number) => getFormUrl([formId]),
    onSuccess: (formURL) => {
      if (formURL.dataList[0].formUrl == null) {
        alert('최종제출이 완료되지 않은 학생입니다.');
      } else if (formURL.dataList.length > 0) {
        window.open(formURL.dataList[0].formUrl);
      }
    },
    onError: handleError,
  });

  return { checkFormUrl, ...restMutation };
};

export const usePrintFormUrlMutation = () => {
  const { handleError } = useApiError();
  const { mutate: printFormUrl, ...restMutation } = useMutation({
    mutationFn: (formIdList: number[]) => getFormUrl(formIdList),
    onSuccess: (formURL) => {
      let hasShownAlert = false;
      formURL.dataList.forEach((formURL) => {
        const link = window.open(formURL.formUrl);
        if (!link || link.closed || typeof link.closed == 'undefined') {
          if (!hasShownAlert) {
            alert('팝업 및 리디렉션을 허용해주세요');
            hasShownAlert = true;
          }
        }
      });
    },
    onError: handleError,
  });

  return { printFormUrl, ...restMutation };
};
