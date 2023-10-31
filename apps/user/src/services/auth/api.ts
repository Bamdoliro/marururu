import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  PatchVerificationReq,
  PostJoinAuthReq,
  PostLoginAuthReq,
} from '@/types/auth/remote';

export const postLoginUser = async ({ phoneNumber, password }: PostLoginAuthReq) => {
  const { data } = await maru.post('/auth', { phoneNumber, password });
  return data;
};

export const postJoinUser = async ({ phoneNumber, name, password }: PostJoinAuthReq) => {
  const { data } = await maru.post('/user', { phoneNumber, name, password });
  return data;
};

export const postRequestVerificationCode = async (phoneNumber: string) => {
  const { data } = await maru.post('/user/verification', { phoneNumber });
  return data;
};

export const patchVerification = async ({ code, phoneNumber }: PatchVerificationReq) => {
  const { data } = await maru.patch('/user/verification', { code, phoneNumber });
  return data;
};

export const deleteLogoutUser = async () => {
  await maru.delete('/auth', authorization());
};
