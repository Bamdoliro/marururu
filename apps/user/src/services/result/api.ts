import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetResultRes } from '@/types/result/remote';

export const getFirstResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/first', authorization());
  return data;
};

export const getFinalResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/final', authorization());
  return data;
};

export const getAdmissionTicket = async () => {
  const { data } = await maru.get('/form/admission-ticket', {
    ...authorization(),
    responseType: 'blob',
  });
  return data;
};
