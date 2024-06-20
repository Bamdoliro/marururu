import {
  usePostMessageMutation,
  usePostMeisterMessageMutaion,
} from '@/services/message/mutations';
import type { PostMessageReq, PostMeisterMessageReq } from '@/types/message/remote';

export const useMessagePostAction = (messageData: PostMessageReq) => {
  const { postMessageMutate } = usePostMessageMutation(messageData);

  const handleMessagePostButtonClick = () => {
    postMessageMutate();
  };

  return { handleMessagePostButtonClick };
};

export const useMeisterMessagePostAction = (
  meisterMessageData: PostMeisterMessageReq
) => {
  const { postMeisterMessageMutate } = usePostMeisterMessageMutaion(meisterMessageData);

  const handleMeisterMessagePostButtonClick = () => {
    postMeisterMessageMutate();
  };

  return { handleMeisterMessagePostButtonClick };
};
