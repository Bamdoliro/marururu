import { useApiError } from '@/hooks';
import type { PostFairReq } from '@/types/fair-management/remote';
import { useRouter } from 'next/navigation';
import { postFair } from './api';
import { ROUTES } from '@/constants/common/constant';
import { toast } from 'react-toastify';
import { useMutation } from '@tanstack/react-query';

export const usePostFairMutation = (fairData: PostFairReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postFairMutate, ...resMutation } = useMutation({
    mutationFn: () => postFair(fairData),
    onSuccess: () => {
      toast('입학 설명회 일정이 추가되었습니다.', {
        type: 'success',
      });
      router.push(ROUTES.FAIR_MANAGEMENT);
    },
    onError: handleError,
  });

  return { postFairMutate, ...resMutation };
};
