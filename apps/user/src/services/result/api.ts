import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetResultRes } from '@/types/result/remote';

export const getFirstResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/first', authorization());
  return data;
};

export const getFinalResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/final', authorization());
  return data;
};
