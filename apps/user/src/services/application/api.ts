import { maru } from '@/apis/instance/instance';
import { GetApplicationListRes } from '@/types/application/remote';

export const getApplicationList = async (type: string) => {
    const { data } = await maru.get<GetApplicationListRes>(`/fair?type=${type}`);
    return data;
};
