import { ROUTES } from '@/constants/common/constant';
import { useApiError } from '@/hooks';
import type { PostMessageReq, PutMessageReq } from '@/types/message/remote';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { deleteMessage, postMessage, putEditMessage } from './api';

export const useDeleteMessageMutation = (id: number) => {
  const router = useRouter();

  const { mutate: deleteMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => deleteMessage(id),
    onSuccess: () => {
      toast('게시물이 삭제되었습니다.', {
        type: 'success',
      });
      router.push(ROUTES.MESSAGE);
    },
  });

  return { deleteMessageMutate, ...restMutation };
};

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

export const useMessageEditMutation = (id: number, messageData: PutMessageReq) => {
  const { handleError } = useApiError();
  const router = useRouter();

  const { mutate: editMessageMutate, ...restMutation } = useMutation({
    mutationFn: () => putEditMessage(id, messageData),
    onSuccess: () => {
      toast('게시물이 수정되었습니다.', {
        type: 'success',
      });
      router.push(`${ROUTES.MESSAGE}/${id}`);
    },
    onError: handleError,
  });

  return { editMessageMutate, ...restMutation };
};
