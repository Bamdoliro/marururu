import { useApiError } from '@/hooks';
import type { PostMessageReq, PostMeisterMessageReq } from '@/types/message/remote';
import { useMutation } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import { postMessage, postMeisterMessage } from './api';
import { useAccessTokenValueStore } from '@/store/auth/auth';

export const usePostMessageMutation = (messageData: PostMessageReq) => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const { mutate: postMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => postMessage(messageData, accessToken),
    onSuccess: () => {
      toast('메시지가 전송되었습니다.', {
        type: 'success',
      });
    },
    onError: handleError,
  });

  return { postMessageMutate, ...restMutation };
};

export const usePostMeisterMessageMutaion = (
  meisterMessageData: PostMeisterMessageReq
) => {
  const { handleError } = useApiError();
  const accessToken = useAccessTokenValueStore();

  const { mutate: postMeisterMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => postMeisterMessage(meisterMessageData, accessToken),
    onSuccess: () => {
      toast('메시지가 전송되었습니다.', {
        type: 'success',
      });
    },
    onError: handleError,
  });

  return { postMeisterMessageMutate, ...restMutation };
};
