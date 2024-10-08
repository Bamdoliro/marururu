import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetUserRes } from '@/types/user/remote';

export const getUser = async (accessToken: string | null) => {
  const { data } = await maru.get<GetUserRes>('/user', authorization(accessToken));
  return data;
};
