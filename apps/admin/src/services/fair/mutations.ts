import { useApiError } from '@/hooks';
import type { PostFairReq } from '@/types/fair/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postFair } from './api';
import { toast } from 'react-toastify';
import { ROUTES } from '@/constants/common/constant';

export const usePostFairMustation = (fairData: PostFairReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postFairMutate, ...restMutation } = useMutation({
    mutationFn: () => postFair(fairData),
    onSuccess: () => {
      toast('입학설명회 일정이 게시되었습니다.', {
        type: 'success',
      });
      router.push(ROUTES.FAIR);
    },
    onError: handleError,
  });

  return { postFairMutate, ...restMutation };
};
