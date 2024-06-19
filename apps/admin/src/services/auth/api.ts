import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { PostLoginAuthReq, GetCheckLoginRes } from '@/types/auth/remote';

export const postLoginAdmin = async ({ phoneNumber, password }: PostLoginAuthReq) => {
  const { data } = await maru.post('/auth', { phoneNumber, password });
  return data;
};

export const deleteLogoutAdmin = async () => {
  await maru.delete('/auth', authorization());
};

export const getCheckLogin = async () => {
  const { data } = await maru.get<GetCheckLoginRes>('/user', authorization());
  return data;
};
