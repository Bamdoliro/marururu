import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetRegistrationListRes } from '@/types/registration/remote';

export const getRegistrationList = async () => {
  const { data } = await maru.get<GetRegistrationListRes>(
    '/registration',
    authorization()
  );
  return data;
};
