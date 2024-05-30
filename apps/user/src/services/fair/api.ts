import { maru } from '@/apis/instance/instance';
import type { GetFairListRes } from '@/types/fair/remote';

export const getFairList = async (fairType: string) => {
  const { data } = await maru.get<GetFairListRes>(`/fair?type=${fairType}`);
  return data;
};
