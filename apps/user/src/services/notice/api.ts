import { maru } from '@/apis/instance/instance';

export const noticeList = async () => {
    const { data } = await maru.get('/notice');
    return data;
};

export const noticeDetail = async (id: number) => {
    const { data } = await maru.get(`/notice/${id}`);
    return data;
};
