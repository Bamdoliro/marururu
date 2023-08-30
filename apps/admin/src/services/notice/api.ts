import { maru } from '@/apis/instance/instance';
import { GetNoticeListRes } from '@/types/notice/remote';

export const getNoticeList = async () => {
    const { data } = await maru.get<GetNoticeListRes>('/notice');
    return data;
};
