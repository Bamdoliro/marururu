import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetFairListRes, PostFairReq } from '@/types/fair/remote';

export const getFairList = async (fairType: string) => {
  const { data } = await maru.get<GetFairListRes>(`/fair?type=${fairType}`);
  return data;
};

export const postFair = async (fairData: PostFairReq) => {
  const { data } = await maru.post('/fair', fairData, authorization());
  return data;
};
