import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  PatchVerificationReq,
  PostJoinAuthReq,
  PatchUpdateAuthReq,
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

export const patchUpdateUser = async ({ phoneNumber, password }: PatchUpdateAuthReq) => {
  const { data } = await maru.patch('/user/password', { phoneNumber, password });
  return data;
};

export const postRequestVerificationCode = async (phoneNumber: string, type: string) => {
  const { data } = await maru.post('/user/verification', { phoneNumber, type });
  return data;
};

export const patchVerification = async ({
  code,
  phoneNumber,
  type,
}: PatchVerificationReq) => {
  const { data } = await maru.patch('/user/verification', { phoneNumber, code, type });
  return data;
};

export const deleteLogoutUser = async () => {
  await maru.delete('/auth', authorization());
};
