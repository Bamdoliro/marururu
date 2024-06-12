import { usePostFairMutation } from '@/services/fair-management/mutations';
import type { PostFairReq } from '@/types/fair-management/remote';

export const useFairPostAction = (fairData: PostFairReq) => {
  const { postFairMutate } = usePostFairMutation(fairData);

  const handleFairPostButtonClick = () => {
    postFairMutate();
  };

  return { handleFairPostButtonClick };
};
