import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetAdminRes } from '@/types/admin/remote';

export const getAdmin = async (accessToken: string | null) => {
  const { data } = await maru.get<GetAdminRes>('/user', authorization(accessToken));
  return data;
};
