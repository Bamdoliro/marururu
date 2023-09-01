import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetFormReviewListRes } from '@/types/main/remote';

export const getFormReviewList = async () => {
    const { data } = await maru.get<GetFormReviewListRes>('/form/review', authorization());

    return data;
};
