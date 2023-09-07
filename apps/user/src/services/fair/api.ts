import { maru } from '@/apis/instance/instance';
import { GetFairListRes } from '@/types/fair/remote';

export const getFairList = async (type: string) => {
    const { data } = await maru.get<GetFairListRes>(`/fair?type=${type}`);
    return data;
};
