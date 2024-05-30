import { usePostMessageMutation } from '@/services/message/mutations';
import type { PostMessageReq } from '@/types/message/remote';

export const useMessagePostAction = (messageData: PostMessageReq) => {
  const { postMessageMutate } = usePostMessageMutation(messageData);

  const handleMessagePostButtonClick = () => {
    postMessageMutate();
  };

  return { handleMessagePostButtonClick };
};
