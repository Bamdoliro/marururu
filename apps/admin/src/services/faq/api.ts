import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetFaqDetailRes, GetFaqListRes } from '@/types/faq/remote';

export const getFaqList = async () => {
    const { data } = await maru.get<GetFaqListRes>('/question');
    return data;
};

export const getFaqDetail = async (id: number) => {
    const { data } = await maru.get<GetFaqDetailRes>(`/question/${id}`);
    return data;
};

export const deleteFaq = async (id: number) => {
    const { data } = await maru.delete(`/question/${id}`, authorization());
    return data;
};
