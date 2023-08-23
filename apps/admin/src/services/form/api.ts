import { maru } from '@/apis/instance/instance';
import { GetFormReviewListRes } from '@/types/main/remote';

export const getFormReviewList = async () => {
    const { data } = await maru.get<GetFormReviewListRes>('/form/review');

    return data;
};
