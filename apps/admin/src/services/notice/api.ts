import { maru } from '@/apis/instance/instance';
import { authorization } from '@/apis/token';
import { GetNoticeDetailRes, GetNoticeListRes, PostNotice } from '@/types/notice/remote';

export const getNoticeList = async () => {
    const { data } = await maru.get<GetNoticeListRes>('/notice');
    return data;
};

export const getNoticeDetail = async (id: number) => {
    const { data } = await maru.get<GetNoticeDetailRes>(`/notice/${id}`);
    return data;
};

export const postNotice = async ({ title, content }: PostNotice) => {
    const { data } = await maru.post<PostNotice>('/notice', { title, content }, authorization());
    return data;
};
