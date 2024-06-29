import { usePostFairMustation } from '@/services/fair/mutations';
import type { PostFairReq } from '@/types/fair/remote';

export const useFairPostAction = (fairData: PostFairReq) => {
  const { postFairMutate } = usePostFairMustation(fairData);

  const handleFairPostButtonClick = () => {
    postFairMutate();
  };

  return { handleFairPostButtonClick };
};
