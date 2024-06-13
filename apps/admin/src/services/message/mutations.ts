import { useApiError } from '@/hooks';
import type { PostMessageReq } from '@/types/message/remote';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { postMessage } from './api';

export const usePostMessageMutation = (messageData: PostMessageReq) => {
  const { handleError } = useApiError();

  const { mutate: postMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => postMessage(messageData),
    onSuccess: () => {
      toast('메시지가 전송되었습니다.', {
        type: 'success',
      });
    },
    onError: handleError,
  });

  return { postMessageMutate, ...restMutation };
};
