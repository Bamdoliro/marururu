import { maru } from '@/apis/instance/instance';
import { GetFaqDetailRes, GetFaqListRes } from '@/types/faq/remote';

export const getFaqList = async () => {
    const { data } = await maru.get<GetFaqListRes>('/question');
    return data;
};

export const getFaqDetail = async (id: number) => {
    const { data } = await maru.get<GetFaqDetailRes>(`/question/${id}`);
    return data;
};
