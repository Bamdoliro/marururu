import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import type {
  GetFaqDetailRes,
  GetFaqListRes,
  PostFaqReq,
  PutFaqReq,
} from '@/types/faq/remote';

export const getFaqList = async () => {
  const { data } = await maru.get<GetFaqListRes>('/question');
  return data;
};

export const getFaqDetail = async (id: number) => {
  const { data } = await maru.get<GetFaqDetailRes>(`/question/${id}`);
  return data;
};

export const deleteFaq = async (id: number, accessToken: string | null) => {
  const { data } = await maru.delete(`/question/${id}`, authorization(accessToken));
  return data;
};

export const postFaq = async (faqData: PostFaqReq, accessToken: string | null) => {
  const { data } = await maru.post(`/question`, faqData, authorization(accessToken));
  return data;
};

export const putEditFaq = async (
  id: number,
  faqData: PutFaqReq,
  accessToken: string | null
) => {
  const { data } = await maru.put(`/question/${id}`, faqData, authorization(accessToken));
  return data;
};
