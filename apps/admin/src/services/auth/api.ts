import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { PostLoginAuthReq } from '@/types/auth/remote';

export const postLoginAdmin = async ({ phoneNumber, password }: PostLoginAuthReq) => {
  const { data } = await maru.post('/auth', { phoneNumber, password });
  return data;
};

export const deleteLogoutAdmin = async () => {
  await maru.delete('/auth', authorization());
};
