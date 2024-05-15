import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type { GetResultRes, GetTicketURLRes } from '@/types/result/remote';

export const getFirstResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/first', authorization());
  return data;
};

export const getFinalResult = async () => {
  const { data } = await maru.get<GetResultRes>('/form/result/final', authorization());
  return data;
};

export const getAdmisonTicketUrl = async (ticketIdList: number[]) => {
  const { data } = await maru.get<GetTicketURLRes>(
    `/form/admission-ticket?id-list=${ticketIdList.join('%2C')}`,
    authorization()
  );
  return data;
};
