import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetResultRes } from '@/types/result/remote';

export const getFirstResult = async (accessToken: string | null) => {
  const { data } = await maru.get<GetResultRes>(
    '/form/result/first',
    authorization(accessToken)
  );
  return data;
};

export const getFinalResult = async (accessToken: string | null) => {
  const { data } = await maru.get<GetResultRes>(
    '/form/result/final',
    authorization(accessToken)
  );
  return data;
};

export const getAdmissionTicket = async (accessToken: string | null) => {
  const { data } = await maru.get('/form/admission-ticket', {
    ...authorization(accessToken),
    responseType: 'blob',
  });
  return data;
};
