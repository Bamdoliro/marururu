import { maru } from '@/apis/instance/instance';
import type { GetFaqListRes } from '@/types/faq/remote';

export const getFaqList = async (category: string) => {
  const { data } = await maru.get<GetFaqListRes>(`/question?category=${category}`);
  return data;
};
