import { useApiError } from '@/hooks';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { patchSecondScoreFormat } from './api';

export const useUploadSecondScoreFormatMutation = (removeFileAndCloseModal: () => void) => {
    const { handleError } = useApiError();

    const { mutate: uploadSecondScoreFormat, ...restMutation } = useMutation({
        mutationFn: (formData: FormData) => patchSecondScoreFormat(formData),
        onSuccess: () => {
            toast('파일이 입력되었습니다.', {
                type: 'success',
            });
            removeFileAndCloseModal();
        },
        onError: handleError,
    });

    return { uploadSecondScoreFormat, ...restMutation };
};
