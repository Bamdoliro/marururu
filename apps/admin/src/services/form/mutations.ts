import { useApiError } from '@/hooks';
import { ApprovalStatus } from '@/types/form/client';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { patchFinalScore, patchSecondScoreFormat } from './api';

export const useUploadSecondScoreFormatMutation = (removeFileAndCloseModal: () => void) => {
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

export const useChangeFinalScoreStatusMutation = (
    id: number,
    status: ApprovalStatus,
    closeModal: () => void,
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
