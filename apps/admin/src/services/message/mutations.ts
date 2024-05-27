import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type { PostMessageReq } from '@/types/message/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { postMessage } from './api';

export const usePostMessageMutation = (messageData: PostMessageReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: postMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => postMessage(messageData),
    onSuccess: ({ data }) => {
      toast('게시물이 게시되었습니다.', {
        type: 'success',
      });
      router.push(`${ROUTES.MESSAGE}/${data.id}`);
    },
    onError: handleError,
  });

  return { postMessageMutate, ...restMutation };
};
